const { prisma } = require("../../../src/prisma");
const tbl = prisma.tbl_property_type_master;


const getAllPropertyType = async (req, res) => {
  try {
    const allRecords = await tbl.findMany({
      select: { id: true, property_type: true, status: true },
      where: { is_deleted: 0 },
      orderBy: { id: "desc" },
    });
    return res.status(200).json({
      success: true,
      message: "Records fetched successfully",
      data: allRecords,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: err.message,
    });
  }
};

const addPropertyType = async (req, res) => {
  const { property_type } = req.body;

  try {
    const existing = await tbl.findFirst({
      where: { property_type, is_deleted: 0 },
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Property Type already exists",
        data: {},
      });
    }

    const record = await tbl.create({
      data: { property_type },
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

const getPropertyTypeById = async (req, res) => {
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

const updatePropertyType = async (req, res) => {
  const { id } = req.params;
  const { property_type } = req.body;

  try {
    const existing = await tbl.findFirst({
      where: {
        property_type,
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

    const updated = await tbl.update({
      where: { id: Number(id) },
      data: { ...req.body },
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

/**
 * AJAX-style fetch with pagination, search, and sorting
 */
const getAjaxPropertyType = async (req, res) => {
  const draw = parseInt(req.body.draw) || 1;
  const start = parseInt(req.body.start) || 0;
  const length = parseInt(req.body.length) || 10;
  const order = req.body.order || [];
  const searchValue = req.body.search?.value || "";
  const filteredStatus = req.query?.status || "all";

  const columns = ["property_type", "status"];
  const colIndex = order[0]?.column;
  const dir = order[0]?.dir === "asc" ? "asc" : "desc";
  const sortField = colIndex !== undefined ? columns[colIndex] || "id" : "id";

  let whereClause = { is_deleted: 0 };
  if (searchValue) {
    whereClause = {
      ...whereClause,
      property_type: { contains: searchValue },
    };
  }
  if (filteredStatus !== "all") {
    whereClause.status = filteredStatus;
  }

  const total = await tbl.count({
    where: { is_deleted: 0 },
  });
  const filtered = await tbl.count({ where: whereClause });

  const docs = await tbl.findMany({
    where: whereClause,
    orderBy: { [sortField]: dir },
    skip: start,
    take: length,
  });

  const data = docs.map((row, i) => [
    i + 1 + start,
    row.id,
    row.property_type,
    row.status,
  ]);

  res.json({
    draw,
    recordsTotal: total,
    recordsFiltered: filtered,
    data,
  });
};

const uniquePropertyType = async (req, res) => {
  const { property_type, currentId } = req.query;

  try {
  const whereClause = { property_type, is_deleted: 0 };
    if (currentId) {
      whereClause.NOT = { id: Number(currentId) };
    }
    const existing = await tbl.findFirst({
      where: whereClause,
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Property Type already exists",
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
  getAllPropertyType,
  addPropertyType,
  getPropertyTypeById,
  updatePropertyType,
  getAjaxPropertyType,
  uniquePropertyType,
};
