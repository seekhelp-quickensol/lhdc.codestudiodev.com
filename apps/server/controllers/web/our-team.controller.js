const { prisma } = require("../../prisma/prisma");
const tbl = prisma.tbl_our_team;

/* =========================
   GET ALL TEAM MEMBERS FOR WEB
========================= */
const getTeamMembersForWeb = async (req, res) => {
  try {
    const records = await tbl.findMany({
      where: { is_deleted: 0, status: 1 }, // only active members
      select: {
        id: true,
        name: true,
        designation: {
          select: { designation_name: true },
        },
        our_team_image: true,
      },
      orderBy: { id: "asc" },
    });

    const data = records.map((row) => ({
      id: row.id,
      name: row.name,
      designation: row.designation?.designation_name || "-",
      image: row.our_team_image
        ? `${process.env.PUBLIC_EXPRESS_BACKEND_PUBLIC}/images/${row.our_team_image}`
        : null,
    }));

    return res.status(200).json({
      success: true,
      message: "Team members fetched successfully",
      data,
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
  getTeamMembersForWeb,
};
