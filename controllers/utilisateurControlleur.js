// controllers/utilisateurController.js
const Utilisateur = require('../models/utilisateur');

exports.ajouterUtilisateur = async (req, res) => {
  try {
    const nouvelUtilisateur = new Utilisateur(req.body);
    console.log(req.body)
    const utilisateurEnregistre = await nouvelUtilisateur.save();
    res.status(201).json(req.body);
  } catch (err) {
    console.error("Erreur lors de l'ajout de l'utilisateur :", err);
    res.status(500).send("Erreur lors de l'ajout de l'utilisateur");
  }
};

exports.login = async (req, res) => {
  const { email, motDePasse } = req.body;
  try {
    const utilisateur = await Utilisateur.findOne({ email });
    if (!utilisateur || utilisateur.motDePasse !== motDePasse) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
    // Authentification réussie, renvoyer une réponse appropriée (par exemple, un token JWT)
    res.status(200).json({ message: 'Authentification réussie', utilisateur });
  } catch (err) {
    console.error("Erreur lors de l'authentification :", err);
    res.status(500).json({ message: 'Erreur lors de l\'authentification' });
  }
};


exports.liste_employe = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find({profil : 'employe'});
    res.json(utilisateurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

