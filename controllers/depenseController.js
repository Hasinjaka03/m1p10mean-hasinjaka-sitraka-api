const Depense = require('../models/Depense');

exports.ajouterDepense = async (req, res) => {
  try {
    const nouvelDepense = new Depense(req.body);
    const depenseEnregistre = await nouvelDepense.save();
    res.status(201).json(depenseEnregistre);
  } catch (err) {
    console.error("Erreur lors de l'ajout du depense :", err);
    res.status(500).send("Erreur lors de l'ajout du depense");
  }
};


exports.listeDepense = async (req, res) => {
    try {
      // Utiliser la méthode find() de Mongoose pour récupérer tous les rendez-vous
      const depenses = await Depense.find();
      res.status(200).json(depenses);
    } catch (err) {
      // En cas d'erreur, renvoyer une réponse avec le code d'erreur 500
      res.status(500).json({ message: err.message });
    }
  }