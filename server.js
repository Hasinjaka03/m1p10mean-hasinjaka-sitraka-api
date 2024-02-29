// server.js
const express = require('express');
const cors = require('cors'); // Importer le package cors
const mongoose = require('mongoose');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const employeRoutes = require('./routes/employeRoutes');
const rendezvousRoutes = require('./routes/rendezvousRoutes');
const emailRoutes = require('./routes/emailRoutes');
const preferenceRoutes = require('./routes/preferenceRoutes'); 
const depenseRoutes = require('./routes/depenseRoutes'); 
const statistiqueRoutes = require('./routes/statistiqueRoutes'); 

const app = express();

const {connectToDatabase} = require('./database');

connectToDatabase();

// Middleware pour parser les requêtes JSON
  app.use(cors()); // 
  app.use(express.json({limit:'5mb'}));


// Utiliser les routes pour les opérations CRUD de l'utilisateur
app.use('/utilisateur', utilisateurRoutes);

// Utiliser pour les routes du service
app.use('/manager/service', serviceRoutes);

// utiliser pour les routes de gestion personnel dans manager
app.use('/manager/employe',employeRoutes);

// utiliser pour les routes du rendez_vous dans employe

// utiliser pour les routes de l'envoye d'email
app.use('/manager/email',emailRoutes) ;

app.use('/client', rendezvousRoutes);
app.use('/employe/rendezvous', rendezvousRoutes);
app.use('/client', preferenceRoutes);
app.use('/manager', depenseRoutes);
app.use('/manager/statistique', statistiqueRoutes);



// Écouter le port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
