const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/our-team.controller");




router.get("/get-all-team-member", controller.getTeamMembersForWeb);



module.exports = router;
