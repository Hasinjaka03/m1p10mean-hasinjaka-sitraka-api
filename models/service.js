const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    nom :String,
    duree : Number,
    prix : Number,
    commission : Number
});

module.exports = mongoose.model('Service', serviceSchema) ;