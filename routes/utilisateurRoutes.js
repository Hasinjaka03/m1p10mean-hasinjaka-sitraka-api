// routes/utilisateurRoutes.js
const express = require('express');
const utilisateurController = require('../controllers/utilisateurControlleur');

const router = express.Router();

router.post('/utilisateur/inscription', utilisateurController.ajouterUtilisateur);
router.post('/utilisateur/login', utilisateurController.login);
router.get('/manager/liste_employe', utilisateurController.liste_employe);
router.post('/inscription', utilisateurController.ajouterUtilisateur);
router.post('/login', utilisateurController.login);
router.get('/getAllClient',utilisateurController.liste_client);

module.exports = router;
