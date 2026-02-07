// controllers/admin/blog-category.controller.js
const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.blogCategory;

/* =========================
   ADD CATEGORY
========================= */
const addCategory = async (req, res) => {
  const { name, status } = req.body;

  try {
    // Check if category exists (ignore deleted)
    const existing = await tbl.findFirst({
      where: {
        name,
        is_deleted: 0,
      },
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await tbl.create({
      data: {
        name,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Category added successfully",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* =========================
   GET ACTIVE CATEGORIES
========================= */
const getCategories = async (req, res) => {
  try {
    const categories = await tbl.findMany({
      where: {
        status: 1,
        is_deleted: 0,
      },
      orderBy: { name: "asc" },
    });

    return res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* =========================
   UPDATE CATEGORY
========================= */
const updateBlogCategory = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  try {
    // Check category exists & not deleted
    const category = await tbl.findFirst({
      where: {
        id: Number(id),
        is_deleted: 0,
      },
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Check duplicate name (ignore deleted & current id)
    const existing = await tbl.findFirst({
      where: {
        name,
        is_deleted: 0,
        NOT: { id: Number(id) },
      },
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Category already exists",
      });
    }

    const updated = await tbl.update({
      where: { id: Number(id) },
      data: {
        name,
        status,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating category",
      data: error.message,
    });
  }
};

/* =========================
   GET CATEGORY BY ID
========================= */
const getBlogCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await tbl.findFirst({
      where: {
        id: Number(id),
        is_deleted: 0,
      },
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: category,
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
   AJAX DATATABLE LIST
========================= */
const getAjaxBlogCategory = async (req, res) => {
  try {
    const draw = parseInt(req.body.draw) || 1;
    const start = parseInt(req.body.start) || 0;
    const length = parseInt(req.body.length) || 10;

    const order = req.body.order || [];
    const search_value = req.body.search?.value || "";
    const filter_status = req.query?.status || "all";

    const columns = ["name", "status"];
    const colIndex = order[0]?.column;
    const dir = order[0]?.dir === "asc" ? "asc" : "desc";
    const sort_field = columns[colIndex] || "id";

    /* =========================
       WHERE CLAUSE
    ========================= */
    let whereClause = {
      is_deleted: 0,
    };

    if (search_value) {
      whereClause.name = {
        contains: search_value,
      };
    }

    if (filter_status !== "all") {
      whereClause.status = Number(filter_status);
    }

    /* =========================
       COUNTS
    ========================= */
    const total = await tbl.count({
      where: { is_deleted: 0 },
    });

    const filtered = await tbl.count({
      where: whereClause,
    });

    /* =========================
       FETCH DATA
    ========================= */
    const docs = await tbl.findMany({
      where: whereClause,
      orderBy: { [sort_field]: dir },
      skip: start,
      take: length,
    });

    const data = docs.map((row, index) => [
      start + index + 1,
      row.id,
      row.name,
      row.status,
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


/* =========================
   UNIQUE CATEGORY CHECK
========================= */
const uniqueBlogCategory = async (req, res) => {
  const { name, currentId } = req.query;

  try {
    const whereClause = {
      name,
      is_deleted: 0,
    };

    if (currentId) {
      whereClause.NOT = { id: Number(currentId) };
    }

    const existing = await tbl.findFirst({
      where: whereClause,
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Category already exists",
        isUnique: false,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category is unique",
      isUnique: true,
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
  addCategory,
  getCategories,
  updateBlogCategory,
  getBlogCategoryById,
  getAjaxBlogCategory,
  uniqueBlogCategory,
};
