const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

router.post('/insertService', serviceController.ajouterService);
router.get('/listeService', serviceController.listeService);


// router.post('/create', serviceController.ajout_service);
// router.get('/getAll', serviceController.liste_service);
// router.patch('/update/:id', serviceController.updateServiceById );
// router.delete('/delete/:id', serviceController.deleteServiceById);

module.exports = router;
