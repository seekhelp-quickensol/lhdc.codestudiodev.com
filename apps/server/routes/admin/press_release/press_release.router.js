const express = require("express");
const router = express.Router();

const controller = require("../../../controllers/admin/press_realease/press_release.controller");
const upload = require("../../../middleware/upload")("uploads/images");

const {
 pressReleaseValidationRules,
  validateRequest,
} = require("../../../validations/validations");

// =========================
// PRESS RELEASE ROUTES
// =========================

router.post("/add-press-release",upload.single("image"),pressReleaseValidationRules ,validateRequest,controller.addPressRelease);

router.get("/press-release-list",controller.getAllPressReleases);

router.get("/get-press-release/:id",controller.getPressReleaseById);

router.put("/update-press-release/:id",upload.single("image"),pressReleaseValidationRules ,validateRequest,controller.updatePressRelease);

router.post("/ajax/press-release-list", controller.getAjaxPressReleases);


module.exports = router;
