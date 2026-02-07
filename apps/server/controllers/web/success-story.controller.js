const { prisma } = require("../../prisma/prisma");
const tbl = prisma.tbl_success_story;

/* =========================
   GET ALL SUCCESS STORIES FOR WEB
========================= */
const getSuccessStoriesForWeb = async (req, res) => {
  try {
    // fetch only active and non-deleted stories
    const records = await tbl.findMany({
      where: { is_deleted: 0, status: 1 }, 
      select: {
        id: true,
        name: true,
        organization: true,
        content: true,
        sucess_story_image: true,
      },
      orderBy: { id: "desc" }, // latest first
    });

    const data = records.map((row) => ({
      id: row.id,
      name: row.name,
      organization: row.organization || "-",
      content: row.content || "-",
      image: row.sucess_story_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.sucess_story_image}`
        : null,
    }));

    return res.status(200).json({
      success: true,
      message: "Success stories fetched successfully",
      data,
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
  getSuccessStoriesForWeb,
};
