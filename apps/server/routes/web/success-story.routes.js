const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/success-story.controller");




router.get("/get-all-success-story", controller.getSuccessStoriesForWeb);



module.exports = router;
