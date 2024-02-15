const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  nom: String,
  duree: Number,
  tarif: Number, // Utiliser Number pour les valeurs décimales
  commission: Number // Utiliser Number pour les valeurs décimales
});

module.exports = mongoose.model('Service', serviceSchema);
