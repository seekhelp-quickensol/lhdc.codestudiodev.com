const express = require('express');
const router = express.Router();

const controller = require('../../../controllers/admin/common.controller');
const { validateId } = require('../../../validations/validations');


router.delete('/delete/:model/:id', validateId, controller.deleteItem);
router.put('/active/:model/:id', validateId, controller.activateItem);
router.put('/inactive/:model/:id', validateId, controller.deactivateItem);


module.exports = router;