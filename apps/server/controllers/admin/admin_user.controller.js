const { prisma } = require("../../prisma/prisma");
const bcrypt = require("bcryptjs");
const tbl = prisma.user;

 
const getAllAdminUser = async (req, res) => {
  try {
    const allRecords = await tbl.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        designation_id: true,
        department_id: true,
        contact: true,
        image: true,
        password: true,
        role: true,
        status: true
      },
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

const addAdminUser = async (req, res) => {
  const {
    name,
    email,
    designation_id,
    department_id,
    contact,
    password,
  } = req.body;

  try {
    // Check if email already exists
    const existing = await prisma.user.findFirst({
      where: { email, is_deleted: 0 },
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Email already exists",
        data: {},
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user record
    const record = await prisma.user.create({
      data: {
        name,
        email,
        contact,
        password: hashedPassword, // store hash in password field
        role: "ADMIN",
        status: 1,
        is_deleted: 0,

        // connect relations
        department: {
          connect: { id: Number(department_id) },
        },
        designation: {
          connect: { id: Number(designation_id) },
        },
      },
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

const getAdminUserById = async (req, res) => {
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

const updateAdminUser = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    designation_id,
    department_id,
    contact,
    password,
  } = req.body;

  try {
    const existing = await tbl.findFirst({
      where: {
        email,
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
      
        data: {
          name,
          email,
          contact,
          department: {
            connect: { id: Number(department_id) },
          },
          designation: {
            connect: { id: Number(designation_id) },
          },
        },
      
      
      
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
const getAjaxAdminUser = async (req, res) => {
  const draw = parseInt(req.body.draw) || 1;
  const start = parseInt(req.body.start) || 0;
  const length = parseInt(req.body.length) || 10;
  const order = req.body.order || [];
  const searchValue = req.body.search?.value || "";
  const department_filter = req.query?.department ;
  const designation_filter = req.query?.designation;
  const fromdata = req.query?.from;
  const todate = req.query?.to;
  const filteredStatus = req.query?.status || "all";

  const columns = [
    "name",
    "email",
    "designation",
    "department",
    "contact",
    "password",
     "status"];
  const colIndex = order[0]?.column;
  const dir = order[0]?.dir === "asc" ? "asc" : "desc";
  const sortField = colIndex !== undefined ? columns[colIndex] || "id" : "id";

  let whereClause = { is_deleted: 0 };
   

  // Search filter
  if (searchValue) {
    whereClause.OR = [
      { name: { contains: searchValue } },
      { email: { contains: searchValue } },
      { contact: { contains: searchValue } },
      { designation: { designation_name: { contains: searchValue } } },
      { department: { department_name: { contains: searchValue } } },
    ];
  }

  if (filteredStatus !== "all") {
    whereClause.status = filteredStatus;
  }
  if (department_filter) {
    whereClause.department_id = Number(department_filter);
  }
  if (designation_filter) {
    whereClause.designation_id = Number(designation_filter);
  }

  if (fromdata && todate) {
    whereClause.created_on = {
      gte: new Date(fromdata),
      lte: new Date(todate),
    };
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
    include: {
      department: { select: { department_name: true } }, // ✅ include state name
      designation: { select: { designation_name: true } }, // ✅ include state name
    },
  });

  const data = docs.map((row, i) => [
    i + 1 + start,
    row.id,
    row.name,
    row.email,
    row.contact,
    row.department ? row.department.department_name : null,
    row.designation ? row.designation.designation_name : null,  
    row.password,
    row.status,
  ]);

  res.json({
    draw,
    recordsTotal: total,
    recordsFiltered: filtered,
    data,
  });
};

const uniqueAdminUser = async (req, res) => {
  const { email, currentId } = req.query;

  try {
    const whereClause = { email, is_deleted: 0 };
    if (currentId) {
      whereClause.NOT = { id: Number(currentId) };
    }
    const existing = await tbl.findFirst({
      where: whereClause,
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "email already exists",
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
  getAllAdminUser,
  addAdminUser,
  getAdminUserById,
  updateAdminUser,
  getAjaxAdminUser,
  uniqueAdminUser,
};
