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
  motDePasse: String ,
  heureDebut : {
    type: String,
    default: '08h00'
  }, 
  heureFin : {
    type: String,
    default: '17h00'
  },
  photo : String
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
