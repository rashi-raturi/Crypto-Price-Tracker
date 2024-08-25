const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: user,                  // add user email
        subject: 'CRYPTO ALERT',
        text: 'Your desired crypto has reached the threshold mark.'
    };

    transporter.sendMail(mailOptions, (error,info)=>{
        if(error){
            console.log(error);  // add res(400)
        }
        else{
            console.log(info);   // add res(200)
        }
    });
    
}


module.exports = sendEmail;