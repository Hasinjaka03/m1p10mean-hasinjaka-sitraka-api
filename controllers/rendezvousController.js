const Rendezvous = require('../models/rendezvous');

exports.ajouterRendezvous = async (req, res) => {
  try {
    const nouvelRendezvous = new Rendezvous(req.body);
    const rendezvousEnregistre = await nouvelRendezvous.save();
    res.status(201).json(rendezvousEnregistre);
  } catch (err) {
    console.error("Erreur lors de l'ajout du rendez vous :", err);
    res.status(500).send("Erreur lors de l'ajout du rendez vous");
  }
};





exports.listeRendezvous = async (req, res) => {
  const clientId = req.params.clientId;
  try {
    // Utiliser la méthode find() de Mongoose pour récupérer tous les rendez-vous
    const appointments = await Rendezvous.find({client: clientId}).populate('service').populate('employee').populate('client');
    res.status(200).json(appointments);
  } catch (err) {
    // En cas d'erreur, renvoyer une réponse avec le code d'erreur 500
    res.status(500).json({ message: err.message });
  }
}


exports.payerRendezvous = async (req, res) => {
  const rendezvousId = req.params.id;

  try {
    // Vérifier si le rendez-vous existe
    const rendezvous = await Rendezvous.findById(rendezvousId);
    if (!rendezvous) {
      return res.status(404).json({ message: 'Rendez-vous non trouvé' });
    }

    // Mettre à jour la date de paiement
    rendezvous.date_payement = new Date();

    // Enregistrer les modifications dans la base de données
    await rendezvous.save();

    return res.status(200).json({ message: 'Date de paiement mise à jour avec succès' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la mise à jour de la date de paiement' });
  }
}


  exports.getProchainRendezvous = async (req,res) => {
  const clientId = req.params.clientId;
  try {
    // Obtenez la date actuelles
    const maintenant = new Date();

    // Recherchez le prochain rendez-vous du client
    const prochainRendezvous = await Rendezvous.findOne({
      client: clientId,
      date: { $gt: maintenant } // Date doit être dans le futur
    }).sort({ date: 1 }); // Trier par date dans l'ordre croissant

    res.status(200).json(prochainRendezvous);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}



// ** Liste des rendez vous pour un employe **
exports.rendezvousByIdemploye = async (req,res) => {
  try{
      const employeId = req.params.id_employee ;
      //console.log(employeId);
      // res.json(employeId);
      const dateR = new Date("2024-02-15");
      // const liste_rendezvous = await RendezVous.find({ "date" : { $gte : dateR}}) ;
      const liste_rendezvous = await RendezVous.find({ "employee" : employeId}).sort({"date" : -1})
      .populate('client service')
      .exec() 
      ;
      //{ date : {$gte : ISODate('2024-02-16T10:00:00Z') , $lt : ISODate('2024-02-17')}} ;
      // .populate('client service employee')
      // .exec() ;
      // const liste_rendezvous = await RendezVous.find({ employee : employeId}) ;
       res.status(200).json(liste_rendezvous) ;
    /*  if (liste_rendezvous.length > 0){
          res.status(200).json(liste_rendezvous) ;
      }
      else {
          res.status(200).send("Aucun rendez-vous trouvé");
      } */
  } catch (error){
      res.status(400).json({ message: error.message });
  }
};

// mettre a jour l'etat d'une rende-vous d'un employe et retourner la liste de rendez vous
exports.updateEtatByIdrd = async (req, res) => {
try {
  const employeId = req.params.id_employee ;
    // Utilisez findByIdAndUpdate pour trouver et mettre à jour le document
     await RendezVous.findByIdAndUpdate(
      req.params.id_rd , // ID du document à mettre à jour
        { etat: req.body.etat }, // Nouvelles valeurs à mettre à jour
        { new: true } // Option pour retourner le document mis à jour
    );
    const liste_rd = await RendezVous.find({ "employee" : employeId}).sort({"date" : -1})
    .populate('client service')
    .exec() 
    ;
    res.status(200).json(liste_rd) ;
  } catch (error){
    res.status(400).json({ message: error.message });
}
};