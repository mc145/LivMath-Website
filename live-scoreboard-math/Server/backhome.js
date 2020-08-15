require('dotenv').config(); 
const express = require('express'); 
const cors = require('cors');
const monk = require('monk'); 
const nodemailer = require('nodemailer'); 
const app = express(); 


app.use(cors()); 
app.use(express.json()); 



app.get('/', (req, res) =>{
   res.json({
    message: "HElllo kdldfjdk"
   });
}); 

app.post('/news', (req, res) =>{
 
  // let transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth:{
  //       user: process.env.EMAIL,
  //       pass: process.env.PASSWORD
  //     }
  // });
   
  // let mailOptions = {
  //     from: 'mathgeek145@gmail.com',
  //     to:  `${req.body.email}`,
  //     subject: 'Testing and Testing',
  //     text: 'It works' 
  // };

  // transporter.sendMail(mailOptions, function(err, data){
  //     if(err){
  //       console.log("error:( " + err); 
  //     }
  //     else{
  //       console.log('sent :)'); 
  //     }
  // });


}); 



app.listen(8888, () =>{
    console.log('Listening on http://localhost:8888'); 
}); 

