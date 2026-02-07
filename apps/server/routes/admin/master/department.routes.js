const express = require("express");
const router = express.Router();

const { addDepartment,getAllDepartment,getDepartmentById,updateDepartment, getAjaxDepartment,uniqueDepartment} = require("../../../controllers/admin/masters/department.controller");
const {
  departmentValidationRules,
  validateRequest,
} = require("../../../validations/validations");
 



router.get("/department-list", getAllDepartment);
router.post("/add-department",  departmentValidationRules, validateRequest, addDepartment);
router.put("/add-department/:id",  departmentValidationRules, validateRequest, updateDepartment);
router.get("/get-department/:id", getDepartmentById);
router.post("/ajax/department-list", getAjaxDepartment);

router.get("/check-unique",uniqueDepartment);

module.exports = router;
