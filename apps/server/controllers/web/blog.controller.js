// const { meta } = require("zod/v4/core");
const { prisma } = require("../../prisma/prisma")
// GET ALL BLOGS
const getAllBlogs = async (req, res) => {
  try {
    const isAdminPreview = req.query.preview === "admin";

    const blogs = await prisma.blog.findMany({
      where: {
        is_deleted: 0,
        ...(isAdminPreview ? {} : { status: 1 }),
      },
      select: {
        id: true,
        title: true,
        meta_description: true,
        author: true,
        meta_keyword: true,
        tag: true,
        meta_url: true,
        short_description: true,
        blog_content: true,
        blog_image: true,
        createdAt: true,
        category: { select: { id: true, name: true } },
      },  
      orderBy: { createdAt: "desc" },
    });

    const formatted = blogs.map((blog) => ({
      ...blog,
      blog_image: blog.blog_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${blog.blog_image}`
        : null,
    }));

    return res.status(200).json({ success: true, data: formatted });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};


// GET BLOG BY ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  const isAdminPreview = req.query.preview === "admin";

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
        is_deleted: 0,
        ...(isAdminPreview ? {} : { status: 1 }),
      },
      include: { category: true },
    });

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    return res.status(200).json({
      success: true,
      data: {
        ...blog,
        blog_image: blog.blog_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${blog.blog_image}`
          : null,
      },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};



// =========================
// GET PAGINATED BLOGS FOR WEB
// =========================
const getPaginatedBlogs = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const skip = (page - 1) * limit;
    const isAdminPreview = req.query.preview === "admin";

    const whereClause = {
      is_deleted: 0,
      ...(isAdminPreview ? {} : { status: 1 }),
    };

    const total = await prisma.blog.count({ where: whereClause });

    const blogs = await prisma.blog.findMany({
  where: whereClause,
  include: {
    category: { select: { id: true, name: true } },
  },
  orderBy: [
    { createdAt: "desc" },
    { id: "desc" }, // ✅ stable ordering
  ],
  skip,
  take: limit,
});


    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      blog_image: blog.blog_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${blog.blog_image}`
        : null,
    }));

    return res.status(200).json({
      success: true,
      data: formattedBlogs,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};


// GET BLOG BY SLUG (PUBLIC / PREVIEW)
const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;
  const isAdminPreview = req.query.preview === "admin";

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        meta_url: slug,
        is_deleted: 0,
        ...(isAdminPreview ? {} : { status: 1 }),
      },
      include: {
        category: { select: { id: true, name: true } },
      },
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.json({
      success: true,
      data: {
        ...blog,
        blog_image: blog.blog_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${blog.blog_image}`
          : null,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


module.exports = {
  getAllBlogs,
  getBlogById,
  getPaginatedBlogs, // new
  getBlogBySlug,

};
