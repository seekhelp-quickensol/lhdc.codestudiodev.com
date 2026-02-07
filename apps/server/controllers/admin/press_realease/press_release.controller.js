const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.tbl_press_release;

/* =========================
   ADD PRESS RELEASE
========================= */
const addPressRelease = async (req, res) => {
  const {
    title,
    meta_url,
    author,
    meta_keyword,
    tag,
    meta_description,
    short_description,
    press_release_content,
    status,
  } = req.body;

  const image = req.file ? req.file.filename : null;

  try {
    const record = await tbl.create({
      data: {
        title,
        meta_url,
        author,
        meta_keyword,
        tag,
        meta_description,
        press_release_image: image,
        short_description,
        press_release_content,
        status: status ? Number(status) : 1,
        is_deleted: 0,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Press release added successfully",
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
   GET ALL PRESS RELEASES
========================= */
const getAllPressReleases = async (req, res) => {
  try {
    const records = await tbl.findMany({
      where: { is_deleted: 0 },
      select: {
        id: true,
        title: true,
        status: true,
        press_release_image: true,
      },
      orderBy: { id: "desc" },
    });

    const data = records.map((row) => ({
      ...row,
      press_release_image: row.press_release_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.press_release_image}`
        : null,
    }));

    return res.status(200).json({
      success: true,
      message: "Records fetched successfully",
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
   GET PRESS RELEASE BY ID
========================= */
const getPressReleaseById = async (req, res) => {
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
      data: {
        ...record,
        press_release_image: record.press_release_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${record.press_release_image}`
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
   UPDATE PRESS RELEASE
========================= */
const updatePressRelease = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    meta_url,
    author,
    meta_keyword,
    tag,
    meta_description,
    short_description,
    press_release_content,
    status,
  } = req.body;

  const image = req.file ? req.file.filename : null;

  try {
    const record = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Press release not found",
      });
    }

    const updatedData = {
      title,
      meta_url,
      author,
      meta_keyword,
      tag,
      meta_description,
      short_description,
      press_release_content,
      status: status ? Number(status) : 1,
    };

    if (image) updatedData.press_release_image = image;

    const updated = await tbl.update({
      where: { id: Number(id) },
      data: updatedData,
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
   AJAX DATATABLE
========================= */
const getAjaxPressReleases = async (req, res) => {
  try {
    const draw = Number(req.body.draw) || 1;
    const start = Number(req.body.start) || 0;
    const length = Number(req.body.length) || 10;
    const order = req.body.order || [];
    const search_value = req.body.search?.value || "";
    const filter_status = req.query?.status || "all";

    const columnMap = {
      2: "title",
      4: "status",
    };

    const orderColumnIndex = order[0]?.column;
    const orderDir = order[0]?.dir === "asc" ? "asc" : "desc";
    const sortField = columnMap[orderColumnIndex] || "id";

    let whereClause = { is_deleted: 0 };

    if (search_value) {
      whereClause.title = {
        contains: search_value,
        mode: "insensitive",
      };
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
  start + i + 1,            // 0 -> Sr No
  row.id,                   // 1 -> ID
  row.title,                // 2 -> Title
  row.press_release_image
    ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.press_release_image}`
    : null,                 // 3 -> Image
  row.author || "-",        // 4 -> Author
  row.status,               // 5 -> Status
  row.meta_url || row.id,   // 6 -> slug/preview
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
  addPressRelease,
  getAllPressReleases,
  getPressReleaseById,
  updatePressRelease,
  getAjaxPressReleases,
};
