const express = require("express");
const router = express.Router();

const controller = require("../../../controllers/admin/blog/blog.controller");
const upload = require("../../../middleware/upload")("uploads/images");
// const {
//   bannerValidationRules,
//   validateRequest,
// } = require("../../../validations/validations");


router.post("/add-blog", upload.single("image"), controller.addBlog);
router.get("/blog-list", controller.getAllBlogs);
router.get("/get-blog/:id", controller.getBlogById);
router.put("/update-blog/:id", upload.single("image"), controller.updateBlog);
router.post("/ajax/blog-list", controller.getAjaxBlogs);





module.exports = router;

