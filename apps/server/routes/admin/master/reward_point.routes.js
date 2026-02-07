const express = require("express");
const router = express.Router();

const { addRewardPoint, getAllRewardPoint, getRewardPointById, updateRewardPoint, getAjaxRewardPoint, uniqueRewardPoint } = require("../../../controllers/admin/masters/reward_point.controller");
const {
    rewardPointsValidationRules,
    validateRequest,
} = require("../../../validations/validations");




router.get("/reward-point-list", getAllRewardPoint);
router.post("/add-reward-point", rewardPointsValidationRules, validateRequest, addRewardPoint);
router.put("/add-reward-point/:id", rewardPointsValidationRules, validateRequest, updateRewardPoint);
router.get("/get-reward-point/:id", getRewardPointById);
router.post("/ajax/list", getAjaxRewardPoint);
router.get("/check-unique", uniqueRewardPoint);

module.exports = router;
