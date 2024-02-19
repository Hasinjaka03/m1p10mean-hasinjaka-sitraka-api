const Rendezvous = require('../models/rendezvous');

exports.ajouterRendezvous = async (req, res) => {
  try {
    const nouvelRendezvous = new Rendezvous(req.body);
    const rendezvousEnregistre = await nouvelRendezvous.save();
    res.status(201).json(rendezvousEnregistre);
  } catch (err) {
    console.error("Erreur lors de l'ajout du rendez vous :", err);
    res.status(500).send("Erreur lors de l'ajout du rendez vous");
  }
};


exports.listeRendezvous = async (req, res) => {
  try {
    // Utiliser la méthode find() de Mongoose pour récupérer tous les rendez-vous
    const appointments = await Rendezvous.find().populate('service').populate('employee').populate('client');
    res.status(200).json(appointments);
  } catch (err) {
    // En cas d'erreur, renvoyer une réponse avec le code d'erreur 500
    res.status(500).json({ message: err.message });
  }
}