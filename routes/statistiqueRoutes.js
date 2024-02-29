const express = require('express');
const statistiqueControler = require('../controllers/statistiqueController');

const router = express.Router();

router.get('/employe', statistiqueControler.tempsMoyenTravailParJour);
router.get('/employes/temps_moyen', statistiqueControler.tempsMoyenTravailEmployes);
router.get('/rendezvous/journalier', statistiqueControler.getRendezvousCountByDay);
router.get('/rendezvous/chiffreaffaire', statistiqueControler.getChiffreAffaires);
router.get('/rendezvous/benefice', statistiqueControler.getProfitsByMonth);



module.exports = router;