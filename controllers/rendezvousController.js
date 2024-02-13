const Rendezvous = require('../models/rendezvous');

exports.ajouterUtilisateur = async (req, res) => {
  try {
    const nouvelRendezvous = new Rendezvous(req.body);
    const rendezvousEnregistre = await nouvelRendezvous.save();
    res.status(201).json(rendezvousEnregistre);
  } catch (err) {
    console.error("Erreur lors de l'ajout de l'utilisateur :", err);
    res.status(500).send("Erreur lors de l'ajout de l'utilisateur");
  }
};