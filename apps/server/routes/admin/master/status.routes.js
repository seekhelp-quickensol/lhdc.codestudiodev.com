const express = require("express");
const router = express.Router();

const {
  addStatus,
  getAllStatus,
  getStatusById,
  updateStatus,
  getAjaxStatus,
  uniqueStatus,
} = require("../../../controllers/admin/masters/statusMaster.controller");

const {
  statusValidationRules,
  validateRequest,
} = require("../../../validations/validations");

router.get("/status-list", getAllStatus);
router.post("/add-status", statusValidationRules, validateRequest, addStatus);
router.put("/update/:id", statusValidationRules, validateRequest, updateStatus);
router.get("/get-status/:id", getStatusById);
router.post("/ajax/status-list", getAjaxStatus);
router.get("/check-unique", uniqueStatus);

module.exports = router;
