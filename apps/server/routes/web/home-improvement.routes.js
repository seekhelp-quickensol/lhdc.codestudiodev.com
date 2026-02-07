const express = require("express");
const router = express.Router();

const controller = require("../../controllers/web/home-improvement.controller");

// =========================
// HOME IMPROVEMENT (USER)
// =========================

// Save / Update Draft
router.post("/save", controller.saveHomeImprovementApplication);

// Get full application (resume/edit)
router.get("/:id", controller.getHomeImprovementApplicationById);

module.exports = router;
