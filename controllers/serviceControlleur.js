// Controlleur pour service

const Service = require('../models/service');

// **Créer une service**
exports.ajout_service = async (req, res) => {
    try {
      const nouvelService = new Service(req.body);
      const serviceEnregistre = await nouvelService.save();
      res.status(201).json({message: 'Service crée avec succès',serviceEnregistre});
    } catch (err) {
      console.error("Erreur lors de l'ajout du service :", err);
      res.status(400).send("Erreur lors de l'ajout du service");
    }
  };

// **Liste des services**
exports.liste_service = async (req, res) => {
    try {
      const services = await Service.find();
      res.status(200).json(services);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

// **Mettre à jour une service par son ID**
exports.updateServiceById = async (req,res) => {
    try{
        const updateService = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true}) ;
        res.status(200).json(updateService) ;
    } catch (error){
        res.status(400).json({ message: error.message });
    }
};

// **Supprimer une service par son ID**
exports.deleteServiceById = async (req,res) => {
    try{
        await Service.findByIdAndDelete(req.params.id) ;
        res.status(200).json({message : 'Service supprimé avec succés'}) ;
    } catch (error){
        res.status(400).json({ message: error.message });
    }
};

