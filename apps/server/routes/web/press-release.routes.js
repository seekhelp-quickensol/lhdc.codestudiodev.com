const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/press-release.controller");

// Public: paginated press releases
router.post("/paginated", controller.getPaginatedPressReleases);

// Public: get press release by slug
router.get("/slug/:slug", controller.getPressReleaseBySlug);

// Optional: get all press releases (admin preview / full list)
router.get("/get-all-press-releases", controller.getAllPressReleases);

// Public: get press release by ID
router.get("/:id", controller.getPressReleaseById);

module.exports = router;
