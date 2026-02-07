const express = require("express");
const router = express.Router();

const { addVerificationStatus,getAllVerificationStatus,getVerificationStatusById,updateVerificationStatus, getAjaxVerificationStatus, uniqueVerificationStatus} = require("../../../controllers/admin/masters/verification_status.controller");
const {
  verificationStatusValidationRules,
  validateRequest,
} = require("../../../validations/validations");




router.get("/verification-status-list", getAllVerificationStatus);
router.post("/add-verification-status" ,  verificationStatusValidationRules, validateRequest, addVerificationStatus);
router.put("/add-verification-status/:id" ,  verificationStatusValidationRules, validateRequest, updateVerificationStatus);
router.get("/get-verification-status/:id", getVerificationStatusById);
router.post("/ajax/list", getAjaxVerificationStatus);
router.get("/check-unique",uniqueVerificationStatus);

module.exports = router;
