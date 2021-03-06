require('dotenv').config(); 
const express = require('express'); 
const cors = require('cors');
const nodemailer = require('nodemailer'); 
const monk = require('monk'); // library to access mongodb 
const app = express(); 


app.use(cors()); 
app.use(express.json()); 


const db = monk('localhost/emailer'); 
const news = db.get('news'); 



app.get('/', (req, res) =>{
   res.json({
    message: "HElllo kdldfjdk"
   });
}); 



app.post('/news', (req, res) =>{
 
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
  });
   
  
    let mailOptions = {
      from: 'mathgeek145@gmail.com',
      to:  `${req.body.email.toString()}`,
      subject: `Kaito I see you`,
      text: 'Hello Kaito, this was sent from a program. If I want, I can do hundreds of these every second' 
  };
  transporter.sendMail(mailOptions, function(err, data){
   
      if(err){
        console.log("error:( " + err); 
        let emailWorks = {
          works: false
        };
        res.json(emailWorks); 
      }
      else{
        console.log('sent :)'); 
        let emailWorks = {
          works: true
        };
        res.json(emailWorks);



       let emails = {
         email: `${req.body.email.toString()}`,
         created: new Date()
       };
        news
          .insert(emails)
          .then(createdEmails =>{
              console.log(createdEmails); 
          });
} 

  }); 
 
});




app.listen(8888, () =>{
    console.log('Listening on http://localhost:8888'); 
}); 

