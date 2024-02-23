const Preference = require('../models/preference');

exports.ajouterPreference = async (req, res) => {
  try {
    const nouvelPreference = new Preference(req.body);
    const preferenceEnregistre = await nouvelPreference.save();
    res.status(201).json(preferenceEnregistre);
  } catch (err) {
    console.error("Erreur lors de l'ajout du preference :", err);
    res.status(500).send("Erreur lors de l'ajout du preference");
  }
};


exports.listePreference = async (req, res) => {
    try {
      // Utiliser la méthode find() de Mongoose pour récupérer tous les rendez-vous
      const preferences = await Preference.find().populate('client').populate('employee').populate('service');
      res.status(200).json(preferences);
    } catch (err) {
      // En cas d'erreur, renvoyer une réponse avec le code d'erreur 500
      res.status(500).json({ message: err.message });
    }
  }