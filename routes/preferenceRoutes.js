const express = require('express');
const preferenceController = require('../controllers/preferenceController');

const router = express.Router();

router.post('/ajoutPreference', preferenceController.ajouterPreference);
router.get('/listePreference', preferenceController.listePreference);

module.exports = router;