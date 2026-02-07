const express = require("express");
const router = express.Router();

const { addDesignation, getAllDesignation, getDesignationById, updateDesignation, getAjaxDesignation, uniqueDesignation } = require("../../../controllers/admin/masters/designation.controller");
const {
  designationValidationRules,
  validateRequest,
} = require("../../../validations/validations");




router.get("/designation-list", getAllDesignation);
router.post("/add-designation", designationValidationRules, validateRequest, addDesignation);
router.put("/add-designation/:id", designationValidationRules, validateRequest, updateDesignation);
router.get("/get-designation/:id", getDesignationById);
router.post("/ajax/designation-list", getAjaxDesignation);
router.get("/check-unique", uniqueDesignation);

module.exports = router;
