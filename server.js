// server.js
const express = require('express');
const cors = require('cors'); // Importer le package cors
const mongoose = require('mongoose');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const rendezvousRoutes = require('./routes/rendezvousRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const { connectToDatabase } = require('./database'); // Importer la fonction connectToDatabase


const app = express();

// Middleware pour parser les requêtes JSON
app.use(cors()); // 
app.use(express.json());

connectToDatabase();

// Utiliser les routes pour les opérations CRUD de l'utilisateur
app.use('/utilisateur', utilisateurRoutes);
app.use('/client', rendezvousRoutes);
app.use('/manager', serviceRoutes);

// Écouter le port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
