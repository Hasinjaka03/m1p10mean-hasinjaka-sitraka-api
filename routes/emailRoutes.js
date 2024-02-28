//routes pour l'envoye d'email

const express = require('express');
const emailController = require('../controllers/emailControlleur');

const router = express.Router();

router.post('/send', emailController.sendEmail);

module.exports = router;