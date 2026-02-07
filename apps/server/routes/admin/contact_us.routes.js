const express = require("express");
const router = express.Router();


const controller=require("../../controllers/admin/contact_us/contact-us.controller")

const {  contactUsValidationRules,  validateRequest,} = require("../../validations/validations");

// =========================
// CONTACT ROUTES
// =========================



router.post("/ajax/list", controller.getAjaxContactUs); // datatable
router.get("/view/:id", controller.getContactById); // view message
router.put("/status/:id", controller.updateContactStatus); // mark resolved/new



module.exports = router;
