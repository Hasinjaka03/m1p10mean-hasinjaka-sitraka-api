// routes/utilisateurRoutes.js
const express = require('express');
const rendezvousController = require('../controllers/rendezvousController');

const router = express.Router();

router.post('/rendezvous', rendezvousController.ajouterRendezvous);
router.post('/liste_rdv', rendezvousController.listeRendezvous);

module.exports = router;
