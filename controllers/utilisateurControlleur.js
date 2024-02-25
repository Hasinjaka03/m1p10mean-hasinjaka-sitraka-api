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

exports.login = async (req, res) => {
  const { email, motDePasse } = req.body;
  try {
    const utilisateur = await Utilisateur.findOne({ email });
    if (!utilisateur || utilisateur.motDePasse !== motDePasse) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' , success : false });
    }
    // Authentification réussie, renvoyer une réponse appropriée (par exemple, un token JWT)
    res.status(200).json({ message: 'Authentification réussie', utilisateur , success : true });
  } catch (err) {
    console.error("Erreur lors de l'authentification :", err);
    res.status(500).json({ message: 'Erreur lors de l\'authentification' , success : false});
  }
};


exports.liste_utilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find();
    res.json(utilisateurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// **Liste des employes 
exports.liste_employe = async (req,res) => {
  try {
    const employes = await Utilisateur.find({ profil: "employe" });
    res.json(employes) ;
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}

// **Mettre à jour une utilisateur par son ID**
exports.updateUtilisateurById = async (req,res) => {
  try{
      const updateUtilisateur = await Utilisateur.findByIdAndUpdate(req.params.id, req.body, {new: true}) ;
      res.status(200).json(updateUtilisateur) ;
  } catch (error){
      res.status(400).json({ message: error.message });
  }
};

// **Supprimer une utilisateur par son ID**
exports.deleteUtilisateurById = async (req,res) => {
  try{
      await Utilisateur.findByIdAndDelete(req.params.id) ;
      res.status(200).json({message : 'Utilisateur supprimé avec succés'}) ;
  } catch (error){
      res.status(400).json({ message: error.message });
  }
};





