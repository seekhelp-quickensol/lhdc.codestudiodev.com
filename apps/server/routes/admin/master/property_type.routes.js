const express = require("express");
const router = express.Router();

const { addPropertyType, getAllPropertyType, getPropertyTypeById, updatePropertyType, getAjaxPropertyType, uniquePropertyType } = require("../../../controllers/admin/masters/property_type.controller");
const {
  propertyTypeValidationRules,
  validateRequest,
} = require("../../../validations/validations");




router.get("/property-type-list", getAllPropertyType);
router.post("/add-property-type", propertyTypeValidationRules, validateRequest, addPropertyType);
router.put("/add-property-type/:id", propertyTypeValidationRules, validateRequest, updatePropertyType);
router.get("/get-property-type/:id", getPropertyTypeById);
router.post("/ajax/list", getAjaxPropertyType);
router.get("/check-unique", uniquePropertyType);

module.exports = router;
