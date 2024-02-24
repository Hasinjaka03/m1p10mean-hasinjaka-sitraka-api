// routes pour rendez-vous

const express = require('express');
const rendezvousController = require('../controllers/rendezVousControlleur');

const router = express.Router();

router.post('/create',rendezvousController.ajouterRendezvous) ;
router.get('/getAll/:id_employee', rendezvousController.rendezvousByIdemploye);
router.patch('/getAll/:id_employee/:id_rd', rendezvousController.updateEtatByIdrd);


module.exports = router;