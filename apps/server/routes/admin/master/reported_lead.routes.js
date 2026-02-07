const express = require("express");
const router = express.Router();

const { addReportedLead,getAllReportedLead,getReportedLeadById,updateReportedLead, getAjaxReportedLead, uniqueReportedLead} = require("../../../controllers/admin/masters/reported_lead.controller");
const {
  reportedLeadValidationRules,
  validateRequest,
} = require("../../../validations/validations");




router.get("/reported-lead-list", getAllReportedLead);
router.post("/add-reported-lead" ,  reportedLeadValidationRules, validateRequest, addReportedLead);
router.put("/add-reported-lead/:id" ,  reportedLeadValidationRules, validateRequest, updateReportedLead);
router.get("/get-reported-lead/:id", getReportedLeadById);
router.post("/ajax/reported-lead-list", getAjaxReportedLead);
router.get("/check-unique",uniqueReportedLead);

module.exports = router;
