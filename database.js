// database.js
const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    // await mongoose.connect('mongodb://localhost:27017/sallonbeautedb', {
    await mongoose.connect('mongodb+srv://hasinjaka:hasinjaka@cluster0.etzh1ga.mongodb.net/sallonbeautedb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connexion à MongoDB établie");
  } catch (err) {
    console.error("Erreur lors de la connexion à MongoDB :", err);
  }
}

module.exports = { connectToDatabase };
