const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/success_story/success_story.controller")
const upload = require("../../middleware/upload")("uploads/images");

const {
  successStoryValidationRules,
  validateRequest,
} = require("../../validations/validations");

// =========================
// SUCCESS STORY ROUTES
// =========================

// Add success story
router.post(  "/add-success-story",  upload.single("image"),  successStoryValidationRules,  validateRequest,  controller.addSuccessStory);

// Get all success stories
router.get("/success-story-list", controller.getAllSuccessStories);

// Get single success story by ID
router.get("/get-success-story/:id", controller.getSuccessStoryById);

// Update success story
router.put(  "/update-success-story/:id",  upload.single("image"),  successStoryValidationRules,  validateRequest,  controller.updateSuccessStory);

// AJAX datatable list
router.post("/ajax/success-story-list", controller.getAjaxSuccessStories);

module.exports = router;
