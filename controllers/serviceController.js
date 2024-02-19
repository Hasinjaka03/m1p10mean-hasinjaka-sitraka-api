const Service = require('../models/service');

exports.ajouterService = async (req, res) => {
  try {
    const nouvelService = new Service(req.body);
    
    const serviceEnregistre = await nouvelService.save();
    res.status(201).json(serviceEnregistre);
  } catch (err) {
    console.error("Erreur lors de l'ajout du Service :", err);
    res.status(500).send("Erreur lors de l'ajout du Service");
  }
};


exports.listeService = async (req, res) => {
    try {
      // Utiliser la méthode find() de Mongoose pour récupérer tous les rendez-vous
      const services = await Service.find();
      res.status(200).json(services);
    } catch (err) {
      // En cas d'erreur, renvoyer une réponse avec le code d'erreur 500
      res.status(500).json({ message: err.message });
    }
  }
