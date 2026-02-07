const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.tbl_banner_master;


const getAllBanner = async (req, res) => {
  try {
    const records = await tbl.findMany({
      select: { id: true, banner_name: true, banner_img: true, status: true },
      where: { is_deleted: 0 },
      orderBy: { id: "desc" },
    });
    return res.status(200).json({
      success: true,
      message: "Records fetched successfully",
      data: records,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: err.message,
    });
  }
};

const addBanner = async (req, res) => {
  const { banner_name } = req.body;
  const image = req.file ? req.file.filename : null

  try {
    const existing = await tbl.findFirst({
      where: { banner_name, is_deleted: 0 },
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Banner already exists",
        data: {},
      });
    }

    const record = await tbl.create({
      data: { banner_name, banner_img: image },
    });

    res.status(201).json({
      success: true,
      message: "Record added successfully",
      record,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

const getBannerById = async (req, res) => {
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
        banner_img: record.banner_img ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${record.banner_img}`: `${process.env.PUBLIC_EXPRESS_DEFAULT_IMAGE}` ,
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

const updateBanner = async (req, res) => {
  const { id } = req.params;
  const { banner_name } = req.body;
  const image = req.file ? req.file.filename : null
  try {
    const existing = await tbl.findFirst({
      where: {
        banner_name,
        is_deleted: 0,
        NOT: { id: Number(id) },
      },
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Record already exists",
        data: {},
      });
    }
    const updated_data = { banner_name };
    if (image !== null) {
      updated_data.banner_img = image;
    }
    const updated = await tbl.update({
      where: { id: Number(id) },
      data: updated_data,
    });

    res.status(200).json({
      success: true,
      message: "Record updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating record",
      data: error.message,
    });
  }
};


const getAjaxBanner = async (req, res) => {
  const draw = parseInt(req.body.draw) || 1;
  const start = parseInt(req.body.start) || 0;
  const length = parseInt(req.body.length) || 10;
  const order = req.body.order || [];
  const search_value = req.body.search?.value || "";
  const filter_status = req.query?.status || "all";

  const columns = ["banner_name", "banner_img", "status"];
  const colIndex = order[0]?.column;
  const dir = order[0]?.dir === "asc" ? "asc" : "desc";
  const sort_field = colIndex !== undefined ? columns[colIndex] || "id" : "id";

  let whereClause = { is_deleted: 0 };
  if (search_value) {
    whereClause = {
      ...whereClause,
      banner_name: { contains: search_value },
    };
  }
  if (filter_status !== "all") {
    whereClause.status = filter_status;
  }

  const total = await tbl.count({
    where: { is_deleted: 0 },
  });
  const filtered = await tbl.count({ where: whereClause });

  const docs = await tbl.findMany({
    where: whereClause,
    orderBy: { [sort_field]: dir },
    skip: start,
    take: length,
  });

  const data = docs.map((row, i) => [
    i + 1 + start,
    row.id,
    row.banner_name,
    row.banner_img ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.banner_img}`: `${process.env.PUBLIC_EXPRESS_DEFAULT_IMAGE}`,
    row.status,
  ]);

  res.json({
    draw,
    recordsTotal: total,
    recordsFiltered: filtered,
    data,
  });
};

const uniqueBanner = async (req, res) => {
  const { banner_name, currentId } = req.query;

  try {
    const whereClause = { banner_name, is_deleted: 0 };
    if (currentId) {
      whereClause.NOT = { id: Number(currentId) };
    }
    const existing = await tbl.findFirst({
      where: whereClause,
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Banner already exists",
        isUnique: false,
      });
    }

    res.status(200).json({
      success: true,
      message: "Record is unique",
      isUnique: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

module.exports = {
  getAllBanner,
  addBanner,
  getBannerById,
  updateBanner,
  getAjaxBanner,
  uniqueBanner,
};
