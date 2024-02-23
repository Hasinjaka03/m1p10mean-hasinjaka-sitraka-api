const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
  client: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur"
  },
  employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Utilisateur'
    },
  service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service'
    },
  type_preference: String
});

module.exports = mongoose.model('Preference', preferenceSchema);