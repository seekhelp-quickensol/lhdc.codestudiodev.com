const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.tbl_contact_us;

/* =========================
   AJAX DATATABLE - CONTACT US
========================= */
const getAjaxContactUs = async (req, res) => {
  try {
    const draw = Number(req.body.draw) || 1;
    const start = Number(req.body.start) || 0;
    const length = Number(req.body.length) || 10;
    const order = req.body.order || [];
    const search_value = req.body.search?.value || "";
    const filter_status = req.query?.status || "all";

    const columnMap = {
      2: "name",
      3: "email",
      4: "phone",
      5: "status",
      6: "created_on",
    };

    const orderColumnIndex = order[0]?.column;
    const orderDir = order[0]?.dir === "asc" ? "asc" : "desc";
    const sortField = columnMap[orderColumnIndex] || "id";

    let whereClause = { is_deleted: 0 };

    if (search_value) {
      whereClause.OR = [
        { name: { contains: search_value, mode: "insensitive" } },
        { email: { contains: search_value, mode: "insensitive" } },
        { phone: { contains: search_value, mode: "insensitive" } },
        { message: { contains: search_value, mode: "insensitive" } },
      ];
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
  start + i + 1,                  // 0 -> Sr No
  row.id,                         // 1 -> ID
  row.name,                       // 2 -> Name
  row.email,                      // 3 -> Email
  row.phone,                      // 4 -> Phone
  row.message,                     // 5 -> Message
 row.status === 1 ? "New" : "Viewed",

  row.created_on,                 // 7 -> Date
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
   GET CONTACT BY ID
========================= */
const getContactById = async (req, res) => {
  const { id } = req.params;

  try {
    const record = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message fetched successfully",
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
   UPDATE CONTACT STATUS
========================= */
const updateContactStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const record = await tbl.findFirst({
      where: { id: Number(id), is_deleted: 0 },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    const updated = await tbl.update({
      where: { id: Number(id) },
      data: { status: Number(status) },
    });

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating status",
      data: error.message,
    });
  }
};

module.exports = {
  getAjaxContactUs,
  getContactById,
  updateContactStatus,
};
