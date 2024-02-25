const express = require('express');
const depenseController = require('../controllers/depenseController');

const router = express.Router();

router.post('/ajoutDepense', depenseController.ajouterDepense);
router.get('/listeDepense', depenseController.listeDepense);

module.exports = router;