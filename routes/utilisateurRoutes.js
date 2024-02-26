// routes/utilisateurRoutes.js
const express = require('express');
const utilisateurController = require('../controllers/utilisateurControlleur');

const router = express.Router();

router.post('/inscription', utilisateurController.ajouterUtilisateur);
router.post('/login', utilisateurController.login);
router.get('/liste_employe', utilisateurController.liste_utilisateurs);

module.exports = router;
