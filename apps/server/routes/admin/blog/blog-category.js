const express = require("express");
const router = express.Router();

// Controller for blog categories
const controller = require("../../../controllers/admin/blog/blog-category.controller");


const {
  bannerValidationRules,
  validateRequest,
} = require("../../../validations/validations");


// =====================
// Routes for blog category
// =====================

// Add a new category
router.post("/add-category", controller.addCategory);

// Get list of all active categories
router.get("/list-category", controller.getCategories);

router.post("/ajax/category-list", controller.getAjaxBlogCategory);

router.get("/get-category/:id", controller.getBlogCategoryById);

router.put("/update/:id", controller.updateBlogCategory);

router.get("/check-unique", controller.uniqueBlogCategory);




module.exports = router;
