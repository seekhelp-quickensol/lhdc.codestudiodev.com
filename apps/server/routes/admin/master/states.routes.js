const express = require("express");
const { getAllStates, getAllCitiesByStateID, getAllLocationByCityID } = require("../../../controllers/admin/masters/state.controller");
const router = express.Router();

router.get("/state-list", getAllStates);
router.get("/city-by-state", getAllCitiesByStateID);
router.get("/location-by-city", getAllLocationByCityID);


module.exports = router;
