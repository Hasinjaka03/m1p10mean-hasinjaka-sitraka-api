// controlleur pour l'envoye d'email

const nodemailer = require('nodemailer');

exports.sendEmail = (req,res) => {
    // nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user : 'devoirmaster@gmail.com',
            pass: 'devoirP14'
        }
    });

    const mailOptions = {
        from: 'devoirmaster@gmail.com',
        to : req.body.to,
        subject: req.body.subject,
        text: req.body.text
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