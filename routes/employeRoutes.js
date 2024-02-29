// routes pour employé

const express = require('express');
const utilisateurController = require('../controllers/utilisateurControlleur');

const router = express.Router();

router.post('/create', utilisateurController.ajouterUtilisateur);
router.get('/getAll', utilisateurController.liste_employe);
router.patch('/update/:id', utilisateurController.updateUtilisateurById );
router.delete('/delete/:id', utilisateurController.deleteUtilisateurById);

module.exports = router;
