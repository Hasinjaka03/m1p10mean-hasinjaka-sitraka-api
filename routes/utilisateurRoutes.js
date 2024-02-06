// routes/utilisateurRoutes.js
const express = require('express');
const utilisateurController = require('../controllers/utilisateurControlleur');

const router = express.Router();

router.post('/utilisateurs', utilisateurController.ajouterUtilisateur);

module.exports = router;
