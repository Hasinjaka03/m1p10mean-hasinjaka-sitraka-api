//routes pour l'envoye d'email

const express = require('express');
const emailController = require('../controllers/emailControlleur');

const router = express.Router();

router.post('/send', emailController.sendEmail);
router.post('/send2', emailController.sendEmail2);

module.exports = router;