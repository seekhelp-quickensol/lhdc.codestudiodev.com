const { prisma } = require("../../../src/prisma");
const tbl = prisma.tbl_specification_master;


const getAllSpecification = async (req, res) => {
  try {
    const allRecords = await tbl.findMany({
      select: { id: true, specification_name: true, status: true },
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

const addSpecification = async (req, res) => {
  const { specification_name } = req.body;

  try {
    const existing = await tbl.findFirst({
      where: { specification_name, is_deleted: 0 },
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Specification already exists",
        data: {},
      });
    }

    const record = await tbl.create({
      data: { specification_name },
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

const getSpecificationById = async (req, res) => {
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

const updateSpecification = async (req, res) => {
  const { id } = req.params;
  const { specification_name } = req.body;

  try {
    const existing = await tbl.findFirst({
      where: {
        specification_name,
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
const getAjaxSpecification = async (req, res) => {
  const draw = parseInt(req.body.draw) || 1;
  const start = parseInt(req.body.start) || 0;
  const length = parseInt(req.body.length) || 10;
  const order = req.body.order || [];
  const searchValue = req.body.search?.value || "";
  const filteredStatus = req.query?.status || "all";

  const columns = ["specification_name", "status"];
  const colIndex = order[0]?.column;
  const dir = order[0]?.dir === "asc" ? "asc" : "desc";
  const sortField = colIndex !== undefined ? columns[colIndex] || "id" : "id";

  let whereClause = { is_deleted: 0 };
  if (searchValue) {
    whereClause = {
      ...whereClause,
      specification_name: { contains: searchValue },
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
    row.specification_name,
    row.status,
  ]);

  res.json({
    draw,
    recordsTotal: total,
    recordsFiltered: filtered,
    data,
  });
};

const uniqueSpecification = async (req, res) => {
  const { specification_name, currentId } = req.query;

  try {
  const whereClause = { specification_name, is_deleted: 0 };
    if (currentId) {
      whereClause.NOT = { id: Number(currentId) };
    }
    const existing = await tbl.findFirst({
      where: whereClause,
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Specification already exists",
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
  getAllSpecification,
  addSpecification,
  getSpecificationById,
  updateSpecification,
  getAjaxSpecification,
  uniqueSpecification,
};
