const { prisma } = require("../../prisma/prisma");
const tbl = prisma.tbl_faq;

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


module.exports = {
  getAllFaqs,
};