const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.tbl_success_story;

/* =========================
   ADD SUCCESS STORY
========================= */
const addSuccessStory = async (req, res) => {
  const { name, organization, content, status } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const record = await tbl.create({
      data: {
        name,
        organization,
        content,
        sucess_story_image: image,
        status: status ? Number(status) : 1,
        is_deleted: 0,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Success story added successfully",
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
   GET ALL SUCCESS STORIES
========================= */
const getAllSuccessStories = async (req, res) => {
  try {
    const records = await tbl.findMany({
      where: { is_deleted: 0 },
      select: {
        id: true,
        name: true,
        organization: true,
        sucess_story_image: true,
        content: true,
        status: true,
      },
      orderBy: { id: "desc" },
    });

    
    const data = records.map((row) => ({
      ...row,
      sucess_story_image: row.sucess_story_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.sucess_story_image}`
        : null,
    }));

    return res.status(200).json({
      success: true,
      message: "Success stories fetched successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: err.message,
    });
  }
};

/* =========================
   GET SUCCESS STORY BY ID
========================= */
const getSuccessStoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const record = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Success story not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success story fetched successfully",
      data: {
        ...record,
        sucess_story_image: record.sucess_story_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${record.sucess_story_image}`
          : null,
      },
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
   UPDATE SUCCESS STORY
========================= */
const updateSuccessStory = async (req, res) => {
  const { id } = req.params;
  const { name, organization, content, status } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const record = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Success story not found",
      });
    }

    const updatedData = {
      name,
      organization,
      content,
      status: status ? Number(status) : 1,
    };

    if (image) updatedData.sucess_story_image = image;

    const updated = await tbl.update({
      where: { id: Number(id) },
      data: updatedData,
    });

    return res.status(200).json({
      success: true,
      message: "Success story updated successfully",
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
   AJAX DATATABLE
========================= */
const getAjaxSuccessStories = async (req, res) => {
  try {
    const draw = Number(req.body.draw) || 1;
    const start = Number(req.body.start) || 0;
    const length = Number(req.body.length) || 10;
    const order = req.body.order || [];
    const search_value = req.body.search?.value || "";
    const filter_status = req.query?.status || "all";

    const columnMap = {
      2: "name",
      3: "organization",
      5: "status",
    };

    const orderColumnIndex = order[0]?.column;
    const orderDir = order[0]?.dir === "asc" ? "asc" : "desc";
    const sortField = columnMap[orderColumnIndex] || "id";

    let whereClause = { is_deleted: 0 };

    if (search_value) {
      whereClause.OR = [
        { name: { contains: search_value, mode: "insensitive" } },
        { organization: { contains: search_value, mode: "insensitive" } },
      ];
    }

    if (filter_status !== "all") {
      whereClause.status = Number(filter_status);
    }

    const total = await tbl.count({ where: { is_deleted: 0 } });
    const filtered = await tbl.count({ where: whereClause });

    const docs = await tbl.findMany({
      where: whereClause,
      orderBy: { [sortField]: orderDir },
      skip: start,
      take: length,
    });

    const data = docs.map((row, i) => [
  start + i + 1,          // Sr No
  row.id,                 // ID
  row.name,               // Name
  row.organization || "-",// Organization
  row.content || "-",     // Content
  row.sucess_story_image
    ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.sucess_story_image}`
    : null,               // Image
  row.status,             // Status
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
  addSuccessStory,
  getAllSuccessStories,
  getSuccessStoryById,
  updateSuccessStory,
  getAjaxSuccessStories,
};
