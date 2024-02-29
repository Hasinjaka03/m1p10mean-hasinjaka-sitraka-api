// Controlleur pour l'affichage des rendez vous 

const RendezVous = require ('../models/rendez-vous');

exports.ajouterRendezvous = async (req, res) => {
    try {
      const nouvelRendezvous = new RendezVous(req.body);
      const rendezvousEnregistre = await nouvelRendezvous.save();
      res.status(201).json(rendezvousEnregistre);
    } catch (err) {
      console.error("Erreur lors de l'ajout de l'utilisateur :", err);
      res.status(500).send("Erreur lors de l'ajout de l'utilisateur");
    }
  };

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