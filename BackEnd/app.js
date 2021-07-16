const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*',
  credentials: true,
}));

app.get('/', (req,res)=>{
  res.send('working');
})

app.post('/mail', async (req,res)=>{
  try{
    const { emailId, attachments } = req.body;
    
    let transporter = await nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'arch.mayer88@ethereal.email', // generated ethereal user
        pass: '9DhJNUbgK9ccqceDD8', // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Test" <test@example.com>', // sender address
      to: emailId, // list of receivers
      subject: "Images", // Subject line
      text: "Please Find your Images attached!", // plain text body
      html: "<b>Please Find your Images attached!</b>", // html body
      attachments: attachments
    });

    console.log("Message sent");
    res.status(200).send("Mail sent");
  }
  catch(err){
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
})

app.listen(3001, ()=>{
  console.log('Server is Running on localhost: 3001');
})

  