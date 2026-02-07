const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/faq.controller");




router.get("/get-all-faqs", controller.getAllFaqs);



module.exports = router;
