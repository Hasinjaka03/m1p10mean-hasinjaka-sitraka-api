const mongoose = require('mongoose');

const depenseSchema = new mongoose.Schema({
  type_depense: String,
  montant: Number,
  date: Date
});

module.exports = mongoose.model('Depense', depenseSchema);