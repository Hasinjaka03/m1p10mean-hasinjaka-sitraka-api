// models/utilisateur.js
const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  dateNaissance: Date,
  numeroTelephone: String,
  profil: String,
  email: String,
  motDePasse: String
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
