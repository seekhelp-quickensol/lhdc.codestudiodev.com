const { prisma } = require("../../prisma/prisma");

/* ========= helper ========= */
const generateApplicationId = () => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");

  return `HI-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(
    now.getDate()
  )}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
};

const saveHomeImprovementApplication = async (req, res) => {
  let {
    applicationId,
    applicationType,
    activeStep,
    household_members = [],
    monthly_liabilities = [],
    ...payload
  } = req.body;

  try {
    /* =========================
       AUTO APPLICATION ID
    ========================= */
    if (!applicationId) {
      applicationId = generateApplicationId();
    }

    /* =========================
       CHECK EXISTING
    ========================= */
    const existing = await prisma.tbl_home_improvement_application.findFirst({
      where: { application_no: applicationId, is_deleted: 0 },
    });

    let application;

    /* =========================
       CREATE OR UPDATE
    ========================= */
    if (!existing) {
      application = await prisma.tbl_home_improvement_application.create({
        data: {
          application_no: applicationId,
          application_type: applicationType || "Home Improvement Program",
          active_step: Number(activeStep) || 1,
          is_draft: 1,
          status: 1,
          is_deleted: 0,
          ...payload,
          certification_datetime: payload.certification_datetime
            ? new Date(payload.certification_datetime)
            : null,
        },
      });
    } else {
      application = await prisma.tbl_home_improvement_application.update({
        where: { id: existing.id },
        data: {
          active_step: Number(activeStep),
          ...payload,
          certification_datetime: payload.certification_datetime
            ? new Date(payload.certification_datetime)
            : null,
        },
      });

      // clear child tables for clean re-save
      await prisma.tbl_household_member.deleteMany({
        where: { application_id: existing.id },
      });

      await prisma.tbl_monthly_liability.deleteMany({
        where: { application_id: existing.id },
      });
    }

    /* =========================
       CHILD TABLES (FILTER EMPTY)
    ========================= */

    const validHouseholdMembers = household_members.filter(
      (m) => m.name && Number(m.age) > 0
    );

    if (validHouseholdMembers.length) {
      await prisma.tbl_household_member.createMany({
        data: validHouseholdMembers.map((m) => ({
          application_id: application.id,
          name: m.name,
          age: Number(m.age),
        })),
      });
    }

    const validMonthlyLiabilities = monthly_liabilities.filter(
      (l) => l.payee && l.amount
    );

    if (validMonthlyLiabilities.length) {
      await prisma.tbl_monthly_liability.createMany({
        data: validMonthlyLiabilities.map((l) => ({
          application_id: application.id,
          payee: l.payee,
          amount: l.amount,
        })),
      });
    }

    /* =========================
       RESPONSE
    ========================= */
    return res.status(200).json({
      success: true,
      message: "Draft saved successfully",
      data: {
        applicationId: application.application_no,
        internalId: application.id,
        activeStep: application.active_step,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};


/* ======================================================
   GET FULL APPLICATION DETAILS (EDIT / RESUME)
====================================================== */
const getHomeImprovementApplicationById = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await prisma.tbl_home_improvement_application.findFirst({
      where: {
        id: Number(id),
        is_deleted: 0,
      },
      include: {
        household_members: true,
        monthly_liabilities: true,
      },
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Application fetched successfully",
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

module.exports = {
  saveHomeImprovementApplication,
  getHomeImprovementApplicationById,
};
