const { prisma } = require("../../prisma/prisma");

/* =========================
   GET ALL PRESS RELEASES
========================= */
const getAllPressReleases = async (req, res) => {
  try {
    const isAdminPreview = req.query.preview === "admin";

    const pressReleases = await prisma.tbl_press_release.findMany({
      where: {
        is_deleted: 0,
        ...(isAdminPreview ? {} : { status: 1 }),
      },
      select: {
        id: true,
        title: true,
        meta_description: true,
        author: true,
        meta_keyword: true,
        tag: true,
        meta_url: true,
        short_description: true,
        press_release_content: true,
        press_release_image: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const formatted = pressReleases.map((item) => ({
      ...item,
      press_release_image: item.press_release_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${item.press_release_image}`
        : null,
    }));

    return res.status(200).json({
      success: true,
      data: formatted,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* =========================
   GET PRESS RELEASE BY ID
========================= */
const getPressReleaseById = async (req, res) => {
  const { id } = req.params;
  const isAdminPreview = req.query.preview === "admin";

  try {
    const record = await prisma.tbl_press_release.findFirst({
      where: {
        id: Number(id),
        is_deleted: 0,
        ...(isAdminPreview ? {} : { status: 1 }),
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Press release not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        ...record,
        press_release_image: record.press_release_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${record.press_release_image}`
          : null,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* =========================
   GET PAGINATED PRESS RELEASES
========================= */
const getPaginatedPressReleases = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const skip = (page - 1) * limit;
    const isAdminPreview = req.query.preview === "admin";

    const whereClause = {
      is_deleted: 0,
      ...(isAdminPreview ? {} : { status: 1 }),
    };

    const total = await prisma.tbl_press_release.count({
      where: whereClause,
    });

    const records = await prisma.tbl_press_release.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    });

    const formatted = records.map((item) => ({
      ...item,
      press_release_image: item.press_release_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${item.press_release_image}`
        : null,
    }));

    return res.status(200).json({
      success: true,
      data: formatted,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* =========================
   GET PRESS RELEASE BY SLUG
========================= */
const getPressReleaseBySlug = async (req, res) => {
  const { slug } = req.params;
  const isAdminPreview = req.query.preview === "admin";

  try {
    const record = await prisma.tbl_press_release.findFirst({
      where: {
        meta_url: slug,
        is_deleted: 0,
        ...(isAdminPreview ? {} : { status: 1 }),
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Press release not found",
      });
    }

    return res.json({
      success: true,
      data: {
        ...record,
        press_release_image: record.press_release_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${record.press_release_image}`
          : null,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getAllPressReleases,
  getPressReleaseById,
  getPaginatedPressReleases,
  getPressReleaseBySlug,
};
