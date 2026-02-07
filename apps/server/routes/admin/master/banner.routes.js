const express = require("express");
const router = express.Router();

const controller = require("../../../controllers/admin/masters/banner.controller");
const upload = require("../../../middleware/upload")("uploads/banner");
const {
  bannerValidationRules,
  validateRequest,
} = require("../../../validations/validations");




router.get("/banner-list", controller.getAllBanner);
router.post("/add-banner", upload.single("image"), bannerValidationRules, validateRequest, controller.addBanner);
router.put("/add-banner/:id", upload.single("image"), bannerValidationRules, validateRequest, controller.updateBanner);
router.get("/get-banner/:id", controller.getBannerById);
router.post("/ajax/banner-list", controller.getAjaxBanner);
router.get("/check-unique", controller.uniqueBanner);

module.exports = router;
