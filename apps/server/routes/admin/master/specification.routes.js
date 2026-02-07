const express = require("express");
const router = express.Router();

const { addSpecification,getAllSpecification,getSpecificationById,updateSpecification, getAjaxSpecification, uniqueSpecification} = require("../../../controllers/admin/masters/specification.controller");
const {
  specificationValidationRules,
  validateRequest,
} = require("../../../validations/validations");




router.get("/specification-list", getAllSpecification);
router.post("/add-specification" ,  specificationValidationRules, validateRequest, addSpecification);
router.put("/add-specification/:id" ,  specificationValidationRules, validateRequest, updateSpecification);
router.get("/get-specification/:id", getSpecificationById);
router.post("/ajax/list", getAjaxSpecification);
router.get("/check-unique",uniqueSpecification);

module.exports = router;
