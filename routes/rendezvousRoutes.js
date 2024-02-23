// routes/utilisateurRoutes.js
const express = require('express');
const rendezvousController = require('../controllers/rendezvousController');

const router = express.Router();

router.post('/rendezvous', rendezvousController.ajouterRendezvous);
router.get('/listerendezvous', rendezvousController.listeRendezvous);
router.put('/payerRendezvous/:id', rendezvousController.payerRendezvous);
router.get('/prochainRendezvous/:id', rendezvousController.getProchainRendezvous);

module.exports = router;
