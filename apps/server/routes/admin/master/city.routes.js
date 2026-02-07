const express = require("express");
const router = express.Router();

const controller = require("../../../controllers/admin/masters/city.controller");
const {
    cityValidationRules,
    validateRequest,
} = require("../../../validations/validations");
 



router.get("/city-list", controller.getAllCity);
router.post("/add-city",  cityValidationRules, validateRequest, controller.addCity);
router.put("/add-city/:id",  cityValidationRules, validateRequest, controller.updateCity);
router.get("/get-city/:id", controller.getCityById);
router.post("/ajax/city-list", controller.getAjaxCity);
router.get("/check-unique", controller.uniqueCity);

module.exports = router;
