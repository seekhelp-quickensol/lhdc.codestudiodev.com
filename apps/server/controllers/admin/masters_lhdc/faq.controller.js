const { tr } = require("zod/v4/locales");
const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.tbl_faq;

/* =========================
   ADD FAQ
========================= */
const addFaq = async (req, res) => {
  const { question, answer, status } = req.body;

  try {
    const record = await tbl.create({
      data: {
        question,
        answer,
        status: status !== undefined ? Number(status) : 1,

        is_deleted: 0,
      },
    });

    return res.status(201).json({
      success: true,
      message: "FAQ added successfully",
      data: record,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

/* =========================
   GET ALL FAQ
========================= */
const getAllFaqs = async (req, res) => {
  try {
    const records = await tbl.findMany({
      where: { is_deleted: 0 },
      select: {
        id: true,
        question: true,
        answer:true,
        status: true,
      },
      orderBy: { id: "desc" },
    });

    return res.status(200).json({
      success: true,
      message: "Records fetched successfully",
      data: records,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

/* =========================
   GET FAQ BY ID
========================= */
const getFaqById = async (req, res) => {
  const { id } = req.params;

  try {
    const record = await tbl.findFirst({
      where: {
        id: Number(id),
        is_deleted: 0,
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Record fetched successfully",
      data: record,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

/* =========================
   UPDATE FAQ
========================= */
const updateFaq = async (req, res) => {
  const { id } = req.params;
  const { question, answer, status } = req.body;

  try {
    const record = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }

    const updated = await tbl.update({
      where: { id: Number(id) },
      data: {
        question,
        answer,
        status: status !== undefined ? Number(status) : 1,

      },
    });

    return res.status(200).json({
      success: true,
      message: "Record updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating record",
      data: error.message,
    });
  }
};


/* =========================
   AJAX DATATABLE FOR FAQ
========================= */
const getAjaxFaqs = async (req, res) => {
  try {
    const draw = Number(req.body.draw) || 1;
    const start = Number(req.body.start) || 0;
    const length = Number(req.body.length) || 10;
    const order = req.body.order || [];
    const search_value = req.body.search?.value || "";
    const filter_status = req.query?.status || "all";

    // Map column index to DB field
    const columnMap = {
      1: "question",
      2: "status",
    };

    const orderColumnIndex = order[0]?.column;
    const orderDir = order[0]?.dir === "asc" ? "asc" : "desc";
    const sortField = columnMap[orderColumnIndex] || "id";

    // Base where clause
    let whereClause = { is_deleted: 0 };

    // Search filter
    if (search_value) {
      whereClause.OR = [
        { question: { contains: search_value, mode: "insensitive" } },
        { answer: { contains: search_value, mode: "insensitive" } },
      ];
    }

    // Status filter
    if (filter_status !== "all") {
      whereClause.status = Number(filter_status);
    }

    // Total and filtered count
    const total = await tbl.count({ where: { is_deleted: 0 } });
    const filtered = await tbl.count({ where: whereClause });

    // Fetch records
    const docs = await tbl.findMany({
      where: whereClause,
      orderBy: { [sortField]: orderDir },
      skip: start,
      take: length,
    });

    // Map data for DataTable
    const data = docs.map((row, i) => [
      start + i + 1, // 0 -> Sr No
      row.question,   // 1 -> Question
      row.answer,     // 2 -> Answer
      row.status,     // 3 -> Status
      row.id,         // 4 -> ID
    ]);

    return res.json({
      draw,
      recordsTotal: total,
      recordsFiltered: filtered,
      data,
    });
  } catch (err) {
    return res.status(500).json({
      draw: req.body.draw || 1,
      recordsTotal: 0,
      recordsFiltered: 0,
      data: [],
      message: err.message,
    });
  }
};

module.exports = {
  addFaq,
  getAllFaqs,
  getFaqById,
  updateFaq,
  getAjaxFaqs

};
