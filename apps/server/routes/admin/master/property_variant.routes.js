const express = require("express");
const router = express.Router();

const { addPropertyVariant,getAllPropertyVariant,getPropertyVariantById,updatePropertyVariant, getAjaxPropertyVariant, uniquePropertyVariant} = require("../../../controllers/admin/masters/property_variant.controller");
const {
  propertyVariantValidationRules,
  validateRequest,
} = require("../../../validations/validations");




router.get("/property-variant-list", getAllPropertyVariant);
router.post("/add-property-variant" ,  propertyVariantValidationRules, validateRequest, addPropertyVariant);
router.put("/add-property-variant/:id" ,  propertyVariantValidationRules, validateRequest, updatePropertyVariant);
router.get("/get-property-variant/:id", getPropertyVariantById);
router.post("/ajax/list", getAjaxPropertyVariant);
router.get("/check-unique",uniquePropertyVariant);

module.exports = router;
