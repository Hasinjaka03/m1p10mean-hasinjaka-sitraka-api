const moment = require('moment');

const Rendezvous = require('../models/rendezvous');

exports.tempsMoyenTravailParJour = async (req, res) => {
  try {
    const employeId = req.query.employeId;
    const mois = req.query.mois;
    const annee = req.query.annee;


    // Convertir le mois et l'année en intervalle de dates
    const debutMois = moment(`${annee}-${mois}-01`, 'YYYY-MM-DD').startOf('month');
    const finMois = moment(debutMois).endOf('month');

    // Recherche des rendez-vous pour l'employé spécifié pendant le mois spécifié
    const rendezvous = await Rendezvous.find({
      employee: employeId,
      date: { $gte: debutMois, $lte: finMois }
    }).populate('service');

    // Calculer la durée totale de travail pour chaque jour
    const travailParJour = {};
    rendezvous.forEach(rendezvous => {
      const date = moment(rendezvous.date).format('YYYY-MM-DD');
      const dureeRendezvous = rendezvous.service.duree; // Durée du rendez-vous
      if (!travailParJour[date]) {
        travailParJour[date] = [];
      }
      travailParJour[date].push(dureeRendezvous);
    });

    // Calculer la moyenne de travail pour chaque jour
    const moyenneTravailParJour = {};
    for (const [date, durees] of Object.entries(travailParJour)) {
      const moyenne = durees.reduce((total, duree) => total + duree, 0);
      moyenneTravailParJour[date] = moyenne;
    }

    res.status(200).json(moyenneTravailParJour);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
