const moment = require('moment');

const Rendezvous = require('../models/rendezvous');
const Utilisateur = require('../models/utilisateur');

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



exports.tempsMoyenTravailEmployes = async (req, res) => {
  try {
    const mois = req.query.mois;
    const annee = req.query.annee;

    // Définir la date de début et de fin du mois spécifié
    const debutMois = new Date(annee, mois - 1, 1); // Mois est indexé à partir de 0
    const finMois = new Date(annee, mois, 1);

    // Utiliser l'agrégation pour regrouper les rendez-vous par employé et calculer la somme des durées de service pour le mois spécifié
    const result = await Rendezvous.aggregate([
      {
        $match: {
          date: { $gte: debutMois, $lte: finMois } // Filtrer les rendez-vous pour le mois spécifié
        }
      },
      {
        $group: {
          _id: '$employee', // Grouper les rendez-vous par employé
          totalDureeService: { $sum: '$service.duree' }, // Calculer la somme des durées de service
          totalRendezvous: { $sum: 1 } // Compter le nombre total de rendez-vous
        }
      },
      {
        $project: {
          employe: '$_id',
          tempsMoyenTravail: { $divide: ['$totalDureeService', 30] } // Calculer le temps moyen de travail pour le mois (en supposant 30 jours)
        }
      }
    ]);

    res.status(200).json(result);
  } catch (err) {
    // En cas d'erreur, renvoyer une réponse avec le code d'erreur 500
    res.status(500).json({ message: err.message });
  }
}


exports.getRendezvousCountByDay = async (req, res) => {
  try {
    const mois = parseInt(req.query.mois); // Convertir en nombre
    const annee = parseInt(req.query.annee); // Convertir en nombre

    const joursDansMois = new Date(annee, mois, 0).getDate();

    // Générer la liste des jours du mois
    const joursDuMois = Array.from({ length: joursDansMois }, (_, index) => index + 1);


    // Utiliser la méthode aggregate pour agréger les données
    const rendezvousCount = await Rendezvous.aggregate([
      {
        // Filtrez les rendez-vous pour le mois et l'année donnés
        $match: {
          date: {
            $gte: new Date(annee, mois - 1, 1), // Date de début du mois
            $lte: new Date(annee, mois, 1) // Date de fin du mois
          }
        }
      },
      {
        // Groupez les rendez-vous par jour
        $group: {
          _id: { $dayOfMonth: "$date" }, // Grouper par jour du mois
          count: { $sum: 1 } // Compter le nombre de rendez-vous par jour
        }
      }
    ]);

    const joursAvecRendezvous = joursDuMois.map(jour => {
      const rendezvousDuJour = rendezvousCount.find(rendezvous => rendezvous._id === jour);
      return { jour, count: rendezvousDuJour ? rendezvousDuJour.count : 0 };
    });

    res.status(200).json(joursAvecRendezvous);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



