// server.js
const express = require('express');
const cors = require('cors'); // Importer le package cors
const mongoose = require('mongoose');
const utilisateurRoutes = require('./routes/utilisateurRoutes');

const app = express();

// Middleware pour parser les requêtes JSON
app.use(cors()); // 
app.use(express.json());

// Connecter à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/sallonbeautedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connexion à MongoDB établie");
}).catch(err => console.error("Erreur lors de la connexion à MongoDB :", err));

// Utiliser les routes pour les opérations CRUD de l'utilisateur
app.use('/api', utilisateurRoutes);

// Écouter le port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
