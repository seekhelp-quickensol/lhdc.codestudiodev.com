const { includes } = require("zod");
const { prisma } = require("../../../prisma/prisma");
const tbl = prisma.tbl_states;

const getAllStates = async (req, res) => {
    try {
      const allRecords = await tbl.findMany({
        select: { id: true,  name:true, country_id: true },
        // where: { country_id: 101},
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

  const getAllCitiesByStateID = async (req,res) => {
    try {
      const { state_id } = req.query;
      const allRecords = await prisma.tbl_city_master.findMany({
        where: { state_id: Number(state_id), is_deleted: 0 },
        select: { id: true, city_name: true },
        orderBy: { id: "desc" },
      });
      return res.status(200).json({
        success: true,
        message: "Records fetched successfully",
        data: allRecords,
      });
    } catch (err) {
      throw new Error("Error fetching locations: " + err.message);
    }
  }

  const getAllLocationByCityID = async (req,res) => {
    try {
      const { city_id } = req.query;
      const allRecords = await prisma.tbl_location_master.findMany({
        where: { city_id: Number(city_id), is_deleted: 0 },
        select: { id: true, location_name: true },
        orderBy: { id: "desc" },
      });
      return res.status(200).json({
        success: true,
        message: "Records fetched successfully",
        data: allRecords,
      });
    } catch (err) {
      throw new Error("Error fetching locations: " + err.message);
    }
  }

  module.exports = {
    getAllStates,
    getAllCitiesByStateID,
    getAllLocationByCityID
  };



  