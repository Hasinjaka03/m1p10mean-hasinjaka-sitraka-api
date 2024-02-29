const mongoose = require('mongoose');

const rendezvousSchema = new mongoose.Schema({
    client: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Utilisateur"
    },
    service: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Service"
    },
    employee: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Utilisateur"
    },
    date: Date ,
    etat: {
        type: Boolean,
        default: false // Valeur par défaut
      }
}, {collection: 'rendezvous'});

module.exports = mongoose.model('Rendezvous', rendezvousSchema );