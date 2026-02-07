const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/contact-us.controller");


router.post("/submit-form", controller.submitContactForm);

module.exports = router;