const { google } = require("googleapis");
const nodemailer = require("nodemailer");

/*POPULATE BELOW FIELDS WITH YOUR CREDETIALS*/

const CLIENT_ID = "68247983468-9rtb1uh49ap7djggpuiu31qiqvlm8hd6.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REFRESH_TOKEN = "1//04bweZI834RncCgYIARAAGAQSNwF-L9IrLGzcK0yEWwaQsgDaMf5t9_2ARIrKD2i3OtEaGSY3nwtQL443MihX9B4GztP7843U8jo";
const REDIRECT_URI = "https://developers.google.com/oauthplayground"; //DONT EDIT THIS
const MY_EMAIL = "andrianomehasinjaka@gmail.com";

/*POPULATE ABOVE FIELDS WITH YOUR CREDETIALS*/

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//YOU CAN PASS MORE ARGUMENTS TO THIS FUNCTION LIKE CC, TEMPLATES, ATTACHMENTS ETC. IM JUST KEEPING IT SIMPLE
const sendTestEmail = async (to) => {
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: MY_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  //EMAIL OPTIONS
  const from = MY_EMAIL;
  const subject = "🌻 Sallon de beaute 🌻";
  const html = `
    <p>Bonjour ${to},</p>
    <p>🌻 Une offre speciale sera valide du 03 au 30 Mars. Ne ratez pas cette occasion. 🌻</p>
    <p>SALLON BEAUTE</p>
    `;
  return new Promise((resolve, reject) => {
    transport.sendMail({ from, subject, to, html }, (err, info) => {
      if (err) reject(err);
      resolve(info);
    });
  });
};

module.exports = { sendTestEmail };