const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

router.post('/insertService', serviceController.ajouterService);
router.get('/listeService', serviceController.listeService);

module.exports = router;
