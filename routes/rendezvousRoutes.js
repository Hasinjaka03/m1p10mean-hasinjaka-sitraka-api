// routes/utilisateurRoutes.js
const express = require('express');
const rendezvousController = require('../controllers/rendezvousController');

const router = express.Router();


router.post('/rendezvous', rendezvousController.ajouterRendezvous);
router.get('/listerendezvous/:clientId', rendezvousController.listeRendezvous);
router.put('/payerRendezvous/:id', rendezvousController.payerRendezvous);
router.get('/prochainRendezvous/:clientId', rendezvousController.getProchainRendezvous);
router.post('/create',rendezvousController.ajouterRendezvous) ;
router.get('/getAll/:id_employee', rendezvousController.rendezvousByIdemploye);
router.patch('/getAll/:id_employee/:id_rd', rendezvousController.updateEtatByIdrd);


module.exports = router;
