const express = require("express");
const router = express.Router();

const {getAllPropertyAmenities,getPropertyAmenitieById, getAjaxPropertyAmenities, addPropertyAmenitie, updatePropertyAmenitie, uniquePropertyAmenitie} = require("../../../controllers/admin/masters/property_amenities.controller");
const { propertyAmenitiesValidationRules, validateRequest } = require("../../../validations/validations");

router.get("/property-amenities-list", getAllPropertyAmenities);
router.post("/add-property-amenitie",  propertyAmenitiesValidationRules, validateRequest, addPropertyAmenitie);
router.put("/add-property-amenitie/:id",  propertyAmenitiesValidationRules, validateRequest, updatePropertyAmenitie);
router.get("/get-property-amenitie/:id", getPropertyAmenitieById);
router.post("/ajax/list", getAjaxPropertyAmenities);
router.get("/check-unique",uniquePropertyAmenitie);

module.exports = router;
