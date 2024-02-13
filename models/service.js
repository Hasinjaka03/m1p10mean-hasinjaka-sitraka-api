const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  nom: String,
  duree: Number,
  tarif: Double,
  commission: Double

});

module.exports = mongoose.model('Service', serviceSchema);
