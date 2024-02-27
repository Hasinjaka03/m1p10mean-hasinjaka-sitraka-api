// server.js
const express = require('express');
const cors = require('cors'); // Importer le package cors
const mongoose = require('mongoose');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const rendezvousRoutes = require('./routes/rendezvousRoutes');
const serviceRoutes = require('./routes/serviceRoutes'); 
const preferenceRoutes = require('./routes/preferenceRoutes'); 
const depenseRoutes = require('./routes/depenseRoutes'); 
const statistiqueRoutes = require('./routes/statistiqueRoutes'); 
const { connectToDatabase } = require('./database'); // Importer la fonction connectToDatabase


const app = express();

// Middleware pour parser les requêtes JSON
app.use(cors()); // 
app.use(express.json());

connectToDatabase();

// Utiliser les routes pour les opérations CRUD de l'utilisateur
app.use('', utilisateurRoutes);
app.use('/client', rendezvousRoutes);
app.use('/manager', serviceRoutes);
app.use('/client', preferenceRoutes);
app.use('/manager', depenseRoutes);
app.use('/manager/statistique', statistiqueRoutes);

// Écouter le port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
