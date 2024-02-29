// models/utilisateur.js
const mongoose = require('mongoose');

const offrespecialeSchema = new mongoose.Schema({
  id: String,
  client: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Utilisateur"
    }, 
    contenu : String ,
    date_envoi: Date 
});

module.exports = mongoose.model('Offrespeciale', offrespecialeSchema);
