// controllers/utilisateurController.js
const Utilisateur = require('../models/utilisateur');

exports.ajouterUtilisateur = async (req, res) => {
  try {
    const nouvelUtilisateur = new Utilisateur(req.body);
    const utilisateurEnregistre = await nouvelUtilisateur.save();
    res.status(201).json(utilisateurEnregistre);
  } catch (err) {
    console.error("Erreur lors de l'ajout de l'utilisateur :", err);
    res.status(500).send("Erreur lors de l'ajout de l'utilisateur");
  }
};
