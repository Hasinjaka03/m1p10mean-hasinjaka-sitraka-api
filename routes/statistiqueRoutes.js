const express = require('express');
const statistiqueControler = require('../controllers/statistiqueController');

const router = express.Router();

router.get('/employe', statistiqueControler.tempsMoyenTravailParJour);


module.exports = router;