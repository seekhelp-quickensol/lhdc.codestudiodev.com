const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/our_team/our_team.controller");
const upload = require("../../middleware/upload")("uploads/images");

const {
  ourTeamValidationRules,
  validateRequest,
} = require("../../validations/validations");

// =========================
// OUR TEAM ROUTES
// =========================

// Add team member
router.post(  "/add-team-member",  upload.single("image"),  ourTeamValidationRules,  validateRequest,  controller.addTeamMember);

// Get all team members
router.get("/team-member-list", controller.getAllTeamMembers);

// Get single team member by ID
router.get("/get-team-member/:id", controller.getTeamMemberById);

// Update team member
router.put(  "/update-team-member/:id",  upload.single("image"),  ourTeamValidationRules,  validateRequest,  controller.updateTeamMember);

// AJAX datatable list
router.post("/ajax/team-member-list", controller.getAjaxTeamMembers);

// router.get("/designation/list",controller.getDesignationList)

module.exports = router;
