const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.blog;

/* =========================
   ADD BLOG
========================= */
const addBlog = async (req, res) => {
  const {
    title,
    meta_url,
    author,
    meta_keyword,
    tag,
    meta_description,
    category_id,
    short_description,
    blog_content,
    
    status,
  } = req.body;

  const image = req.file ? req.file.filename : null;

  try {
    // Check category exists & not deleted
    const category = await prisma.blogCategory.findFirst({
      where: {
        id: Number(category_id),
        is_deleted: 0,
        status: 1,
      },
    });

    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Invalid category",
      });
    }

    const record = await tbl.create({
      data: {
        title,
        meta_url,
        author,
        meta_keyword,
        tag,
        meta_description,
        category_id: Number(category_id),
        blog_image: image,
        short_description,
        blog_content,
        status: status ? Number(status) : 1,
        is_deleted: 0,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Blog added successfully",
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
   GET ALL BLOGS (SIMPLE LIST)
========================= */
const getAllBlogs = async (req, res) => {
  try {
    const records = await tbl.findMany({
      where: { is_deleted: 0 },
      select: {
        id: true,
        title: true,
        status: true,
        blog_image: true,
        category: {
          select: { id: true, name: true },
        },
      },
      orderBy: { id: "desc" },
    });

    return res.status(200).json({
      success: true,
      message: "Records fetched successfully",
      data: {
        ...records,
        blog_image: records.blog_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${records.blog_image}`
          : null,
      },
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
   GET BLOG BY ID
========================= */
const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const record = await tbl.findFirst({
      where: {
        id: Number(id),
        is_deleted: 0,
      },
      include: {
        category: true,
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
        blog_image: record.blog_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${record.blog_image}`
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
   UPDATE BLOG
========================= */
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    meta_url,
    author,
    meta_keyword,
    tag,
    meta_description,
    category_id,
    short_description,
    blog_content,
    status,
  } = req.body;

  const image = req.file ? req.file.filename : null;

  try {
    // Check blog exists
    const blog = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Validate category
    const category = await prisma.blogCategory.findFirst({
      where: {
        id: Number(category_id),
        is_deleted: 0,
      },
    });

    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Invalid category",
      });
    }

    const updated_data = {
      title,
      meta_url,
      author,
      meta_keyword,
      tag,
      meta_description,
      category_id: Number(category_id),
      short_description,
      blog_content,
      status: status ? Number(status) : 1,
    };

    if (image) updated_data.blog_image = image;

    const updated = await tbl.update({
      where: { id: Number(id) },
      data: updated_data,
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
const getAjaxBlogs = async (req, res) => {
  try {
    const draw = Number(req.body.draw) || 1;
    const start = Number(req.body.start) || 0;
    const length = Number(req.body.length) || 10; // ✅ FIXED
    const order = req.body.order || [];
    const search_value = req.body.search?.value || "";
    const filter_status = req.query?.status || "all";

    /**
     * IMPORTANT:
     * Datatable column index → DB field mapping
     */
    const columnMap = {
      2: "title",
      4: "category_id",
      5: "status",
    };

    const orderColumnIndex = order[0]?.column;
    const orderDir = order[0]?.dir === "asc" ? "asc" : "desc";
    const sortField = columnMap[orderColumnIndex] || "id";

    let whereClause = {
      is_deleted: 0,
    };

    if (search_value) {
      whereClause.title = {
        contains: search_value,
        mode: "insensitive",
      };
    }

    if (filter_status !== "all") {
      whereClause.status = Number(filter_status);
    }

    const total = await tbl.count({
      where: { is_deleted: 0 },
    });

    const filtered = await tbl.count({
      where: whereClause,
    });

    const docs = await tbl.findMany({
      where: whereClause,
      include: {
        category: { select: { name: true } },
      },
      orderBy: { [sortField]: orderDir },
      skip: start,
      take: length,
    });

 const data = docs.map((row, i) => [
  start + i + 1,
  row.id,
  row.title,
  row.category?.name || "-",
  row.blog_image
    ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.blog_image}`
    : null,
  row.status,
  row.meta_url,
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
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  getAjaxBlogs,

  
};
