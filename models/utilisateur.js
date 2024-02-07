// models/utilisateur.js
const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  id: String,
  nom: String,
  prenom: String,
  dateNaissance: Date,
  numeroTelephone: String,
  profil: String,
  email: String,
  motDePasse: String
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
