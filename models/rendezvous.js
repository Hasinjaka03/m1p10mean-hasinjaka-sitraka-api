const mongoose = require('mongoose');

const rendezvousSchema = new mongoose.Schema({
  client: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur"
  },
  service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service'
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur'
    },
    date: Date
});

module.exports = mongoose.model('Rendezvous', rendezvousSchema);
