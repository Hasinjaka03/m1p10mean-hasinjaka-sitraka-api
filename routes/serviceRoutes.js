// routes pour service

const express = require('express');
const serviceController = require('../controllers/serviceControlleur');

const router = express.Router();

router.post('/create', serviceController.ajout_service);
router.get('/getAll', serviceController.liste_service);
router.patch('/update/:id', serviceController.updateServiceById );
router.delete('/delete/:id', serviceController.deleteServiceById);

module.exports = router;
