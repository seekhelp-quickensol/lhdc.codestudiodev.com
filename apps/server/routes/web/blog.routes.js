const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/blog.controller");

// Public: paginated blogs
router.post("/paginated", controller.getPaginatedBlogs);


router.get("/slug/:slug", controller.getBlogBySlug);


// Optional: all blogs (maybe remove if using paginated)
router.get("/get-all-blogs", controller.getAllBlogs);

// Public: get blog by slug or ID
router.get("/:id", controller.getBlogById);






module.exports = router;
