const express = require("express");
const { specs, swaggerUi } = require('./swagger');
const router = express.Router();
const { authenticate } = require('../middleware/auth.middleware');


// ===============   Common Routes (DELETE & STATUS)   ================
router.use("/", require("../routes/admin/common/common.routes"));


// ===============   API DOCS   ================

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));




// +-----------------------------------------------------+
// |                 ADMIN ROUTES                        |
// +-----------------------------------------------------+


// ===============   Auth Route   ================
router.use("/auth", require("../routes/admin/auth/auth.routes"));


// ===============   Master Routes   ================


router.use("/designation", authenticate, require("../routes/admin/master/designation.routes"));
router.use("/status", authenticate, require("../routes/admin/master/status.routes"));

router.use("/department", authenticate, require("../routes/admin/master/department.routes"));
router.use("/city", authenticate, require("../routes/admin/master/city.routes"));
router.use("/states", authenticate, require("../routes/admin/master/states.routes"));
router.use("/location", authenticate, require("../routes/admin/master/location.routes"));
router.use("/banner", authenticate, require("../routes/admin/master/banner.routes"));


// ===============    Blog Routes   ================
router.use("/blog", authenticate, require("../routes/admin/blog/blog.routes"));
router.use("/blog-category", authenticate, require("../routes/admin/blog/blog-category"));

// ===============    Press Realease Routes   ================
router.use("/press-release", authenticate, require("../routes/admin/press_release/press_release.router"));


// ===============    Faq Routes   ================
router.use("/faq", authenticate, require("../routes/admin/master_lhdc/faq.routes"));


// ===============    Contact us Routes   ================
router.use("/contact-us", authenticate, require("../routes/admin/contact_us.routes"));

// ===============    our team Routes   ================
router.use("/our-team", authenticate, require("../routes/admin/our_team.routes"));


// ===============    Success Story Routes   ================
router.use("/success-story", authenticate, require("../routes/admin/success_story.routes"));




router.use("/admin-user", authenticate, require("../routes/admin/admin_user.routes"));



// ===============   Web Routes   ================

router.use("/web/blogs",require("./../routes/web/blog.routes"));

router.use("/web/press-release",require("./../routes/web/press-release.routes"));
router.use("/web/faq",require("./../routes/web/faq.routes"));
router.use("/web/contact-us",require("./../routes/web/contact-us.routes"));
router.use("/web/our-team",require("./../routes/web/our-team.routes"));
router.use("/web/success-story",require("./../routes/web/success-story.routes"));


router.use("/web/home-improvement", require("./../routes/web/home-improvement.routes"));


module.exports = router;