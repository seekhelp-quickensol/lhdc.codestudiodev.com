const express = require("express");
const router = express.Router();

const controller = require("../../../controllers/admin/masters_lhdc/faq.controller");

const {
  faqValidationRules,
  validateRequest,
} = require("../../../validations/validations");

// =========================
// FAQ ROUTES
// =========================

router.post("/add-faq", faqValidationRules, validateRequest, controller.addFaq);

router.get("/faq-list", controller.getAllFaqs);

router.get("/get-faq/:id", controller.getFaqById);

router.put("/update-faq/:id",faqValidationRules,  validateRequest,  controller.updateFaq,);

router.post("/ajax/faq-list", controller.getAjaxFaqs);

module.exports = router;
