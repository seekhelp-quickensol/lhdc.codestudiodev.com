const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.tbl_our_team;

/* =========================
   ADD TEAM MEMBER
========================= */
const addTeamMember = async (req, res) => {
  const { name, designation_id, status } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const record = await tbl.create({
      data: {
        name,
        designation_id: designation_id ? Number(designation_id) : null,
        our_team_image: image,
        status: status ? Number(status) : 1,
        is_deleted: 0,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Team member added successfully",
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
   GET ALL TEAM MEMBERS
========================= */
const getAllTeamMembers = async (req, res) => {
  try {
    const records = await tbl.findMany({
      where: { is_deleted: 0 },
      select: {
        id: true,
        name: true,
        designation_id: true,
        our_team_image: true,
        status: true,
      },
      orderBy: { id: "desc" },
    });

    const data = records.map((row) => ({
      ...row,
      our_team_image: row.our_team_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.our_team_image}`
        : null,
    }));

    return res.status(200).json({
      success: true,
      message: "Team members fetched successfully",
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
   GET TEAM MEMBER BY ID
========================= */
const getTeamMemberById = async (req, res) => {
  const { id } = req.params;

  try {
    const record = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Team member fetched successfully",
      data: {
        ...record,
        our_team_image: record.our_team_image
          ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${record.our_team_image}`
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
   UPDATE TEAM MEMBER
========================= */
const updateTeamMember = async (req, res) => {
  const { id } = req.params;
  const { name, designation_id, status } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const record = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    const updatedData = {
      name,
      designation_id: designation_id ? Number(designation_id) : null,
      status: status ? Number(status) : 1,
    };

    if (image) updatedData.our_team_image = image;

    const updated = await tbl.update({
      where: { id: Number(id) },
      data: updatedData,
    });

    return res.status(200).json({
      success: true,
      message: "Team member updated successfully",
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
const getAjaxTeamMembers = async (req, res) => {
  try {
    const draw = Number(req.body.draw) || 1;
    const start = Number(req.body.start) || 0;
    const length = Number(req.body.length) || 10;
    const order = req.body.order || [];
    const search_value = req.body.search?.value || "";
    const filter_status = req.query?.status || "all";

    const columnMap = {
      2: "name",
      3: "status",
    };

    const orderColumnIndex = order[0]?.column;
    const orderDir = order[0]?.dir === "asc" ? "asc" : "desc";
    const sortField = columnMap[orderColumnIndex] || "id";

    let whereClause = { is_deleted: 0 };

    if (search_value) {
      whereClause.name = {
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
      include: {
        designation: true, // include designation name
      },
    });

    const data = docs.map((row, i) => [
      start + i + 1,             // 0 -> Sr No
      row.id,                    // 1 -> ID
      row.name,                  // 2 -> Name
      row.designation?.designation_name || "-",  // 3 -> Designation
      row.our_team_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.our_team_image}`
        : null,                 // 4 -> Image
      row.status,                // 5 -> Status
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
  addTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  getAjaxTeamMembers,

};
