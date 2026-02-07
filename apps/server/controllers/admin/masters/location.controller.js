const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.tbl_location_master;




const getAllLocation = async (req, res) => {
  try {
    const allRecords = await tbl.findMany({
      select: { id: true,  state_id:true,city_id:true, location_name: true, status: true , state:true },
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

const addLocation = async (req, res) => {
  const { state_id ,city_id, location_name } = req.body;

  const state = await prisma.tbl_states.findUnique({
    where: { id: Number(state_id) }
  });
  if (!state) {
    return res.status(400).json({
      success: false,
      message: "Invalid state_id. State does not exist.",
    });
  }


  const city = await prisma.tbl_city_master.findUnique({
    where: { id: Number(city_id) }
  });


  if (!city) {
    return res.status(400).json({
      success: false,
      message: "Invalid city_id. City does not exist.",
    });
  }
  

  try {
    const existing = await tbl.findFirst({
      where: { location_name,city_id:Number(city_id) ,state_id: Number(state_id), is_deleted: 0 },
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Location already exists",
        data: {},
      });
    }

    const record = await tbl.create({
      data: {  state_id: Number(state_id) ,city_id: Number(city_id) 
        , location_name },
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

const getLocationById = async (req, res) => {
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

const updateLocation = async (req, res) => {
  const { id } = req.params;
  const { location_name , state_id,city_id } = req.body;

  try {
    const existing = await tbl.findFirst({
      where: {
        state_id:Number(state_id),  
        city_id:Number(city_id),  
        location_name,
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
        location_name,
        state_id:Number(state_id),
        city_id:Number(city_id)
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
const getAjaxLocation = async (req, res) => {
  const draw = parseInt(req.body.draw) || 1;
  const start = parseInt(req.body.start) || 0;
  const length = parseInt(req.body.length) || 10;
  const order = req.body.order || [];
  const searchValue = req.body.search?.value || "";
  const filteredStatus = req.query?.status || "all";

  const columns = [ "state_id",  "location_name", "status"];
  const colIndex = order[0]?.column;
  const dir = order[0]?.dir === "asc" ? "asc" : "desc";
  const sortField = colIndex !== undefined ? columns[colIndex] || "id" : "id";

  let whereClause = { is_deleted: 0 };
  if (searchValue) {
    whereClause = {
      ...whereClause,
      OR: [
        { location_name: { contains: searchValue } },
        { city: { city_name: { contains: searchValue } } },
        { state: { name: { contains: searchValue } } },
      ],

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
    include: {
        state: { select: { name: true } }, // ✅ include state name
        city: { select: { city_name: true } }, // ✅ include state name
      },
  
  });

  const data = docs.map((row, i) => [
    i + 1 + start,
    row.id,
    row.state_id,
    row.state?.name || "-",
    row.city_id,
    row.city?.city_name || "-",
    row.location_name,
    row.status,
  ]);

  res.json({
    draw,
    recordsTotal: total,
    recordsFiltered: filtered,
    data,
  });
};

const uniqueLocation = async (req, res) => {
  const { state_id , city_id, location_name, currentId } = req.query;

  try {
  const whereClause = {state_id:Number(state_id),city_id:Number(city_id), location_name, is_deleted: 0 };
    if (currentId) {
      whereClause.NOT = { id: Number(currentId) };
    }
    const existing = await tbl.findFirst({
      where: whereClause,
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Location already exists in this state",
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
  getAllLocation,
  addLocation,
  getLocationById,
  updateLocation,
  getAjaxLocation,
  uniqueLocation,
};
