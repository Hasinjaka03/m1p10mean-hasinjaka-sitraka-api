// controlleur pour l'envoye d'email

const nodemailer = require('nodemailer');
const { sendTestEmail } = require ('../models/mailer');

exports.sendEmail = (req,res) => {
    // nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user : 'sfgf',
            pass: 'sdfgsfdg'
        }
    });

    const mailOptions = {
        from: 'sdfgsdfg',
        to : 'sdfg',
        subject: 'test',
        text: 'test ftsn'
    };

    transporter.sendMail(mailOptions,function(error,info){
        if(error) {
            console.log(error) ;
            res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' , success : false});
        } else {
            console.log(info.response) ;
            success = true ;
            res.status(200).json({ message: 'E-mail envoyé avec succès' , success : true});
        }
    });
};





exports.sendEmail2 = async (req,res) => { 

const SENDER_EMAIL_ID = "hasinjaka.kontiki@gmail.com";
  try {
    if (SENDER_EMAIL_ID === "EMAIL_ID") {
      throw new Error(
        "Please update SENDER_EMAIL_ID with your email id in server.js"
      );
    }
    const info = await sendTestEmail(SENDER_EMAIL_ID);
    res.send(info);
  } catch (error) {
    res.send(error);
  }
};