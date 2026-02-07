const express = require("express");
const router = express.Router();

const { addLocation, getAllLocation, getLocationById, updateLocation, getAjaxLocation, uniqueLocation } = require("../../../controllers/admin/masters/location.controller");
const {
    locationValidationRules,
    validateRequest,
} = require("../../../validations/validations");




router.get("/location-list", getAllLocation);
router.post("/add-location",  locationValidationRules, validateRequest, addLocation);
router.put("/add-location/:id",  locationValidationRules, validateRequest, updateLocation);
router.get("/get-location/:id", getLocationById);
router.post("/ajax/location-list", getAjaxLocation);
router.get("/check-unique", uniqueLocation);

module.exports = router;
