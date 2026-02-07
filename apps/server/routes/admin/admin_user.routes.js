const express = require("express");
const router = express.Router();

const {
  addAdminUser,
  getAllAdminUser,
  getAdminUserById,
  updateAdminUser,
  getAjaxAdminUser,
  uniqueAdminUser
} = require("../../controllers/admin/admin_user.controller");
const {
  adminUserValidationRules,
  validateRequest,
} = require("../../validations/validations");


/**
 * @openapi
 * /admin-user-list:
 *   get:
 *     summary: Get all admin users
 *     responses:
 *       200:
 *         description: A list of admin users
 */
router.get("/admin-user-list", getAllAdminUser);

/**
 * @openapi
 * /add-admin-user:
 *   post:
 *     summary: Add a new admin user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin user created
 */
router.post(
  "/add-admin-user",

  adminUserValidationRules,
  validateRequest,
  addAdminUser
);

/**
 * @openapi
 * /add-admin-user/{id}:
 *   put:
 *     summary: Update an existing admin user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Admin user updated
 */
router.put(
  "/add-admin-user/:id",

  adminUserValidationRules,
  validateRequest,
  updateAdminUser
);

/**
 * @openapi
 * /get-admin-user/{id}:
 *   get:
 *     summary: Get admin user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Admin user details
 */
router.get("/get-admin-user/:id", getAdminUserById);

/**
 * @openapi
 * /ajax/list:
 *   post:
 *     summary: Get admin users via AJAX
 *     responses:
 *       200:
 *         description: Admin users list (AJAX)
 */
router.post("/ajax/list", getAjaxAdminUser);

/**
 * @openapi
 * /check-unique:
 *   get:
 *     summary: Check if admin user is unique
 *     responses:
 *       200:
 *         description: Unique check result
 */
router.get("/check-unique", uniqueAdminUser);

module.exports = router;