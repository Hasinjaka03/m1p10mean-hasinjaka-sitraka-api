// server.js
const express = require('express');
const cors = require('cors'); // Importer le package cors
const mongoose = require('mongoose');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const employeRoutes = require('./routes/employeRoutes');
const rendezvousRoutes = require('./routes/rendezvousRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Middleware pour parser les requêtes JSON
  app.use(cors()); // 
  app.use(express.json({limit:'5mb'}));

// Connecter à la base de données MongoDB
// mongoose.connect('mongodb://localhost:27017/sallonbeautedb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("Connexion à MongoDB établie");
// }).catch(err => console.error("Erreur lors de la connexion à MongoDB :", err));

// Utiliser les routes pour les opérations CRUD de l'utilisateur
app.use('/utilisateur', utilisateurRoutes);

// Utiliser pour les routes du service
app.use('/manager/service', serviceRoutes);

// utiliser pour les routes de gestion personnel dans manager
app.use('/manager/employe',employeRoutes);

// utiliser pour les routes du rendez_vous dans employe
app.use('/employe/rendezvous',rendezvousRoutes) ;

// utiliser pour les routes de l'envoye d'email
app.use('/manager/email',emailRoutes) ;




// Écouter le port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
