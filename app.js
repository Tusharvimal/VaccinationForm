const express = require('express');
const path=require('path');
const app = express();
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
mongoose.connect('mongodb://localhost:27017/vaccinationForm', {useNewUrlParser: true, useUnifiedTopology: true});
const port=80;

//Defining mongoose schema
const VaccinationSchema = new mongoose.Schema({
  name: String,
  age: String,
  parent: String,
  address: String,
  contactNumber: String,
  vaccinated: String,
  vaccineName: String,
  dose: String,
  doseDate: String
});

const Vaccination = mongoose.model('Vaccination', VaccinationSchema);

//For serving static files
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Setting template engine as pug
app.set('view engine', 'pug');

//Setting the views directory
app.set('views', path.join(__dirname,'template'))

// EndPoints
app.get('/', (req,res)=>{
  res.status(200).render('index.pug');
});

app.post('/',(req,res)=>{
  console.log(req.body);
  var myData = new Vaccination(req.body);
  myData.save().then(()=>{
    res.status(200).render('response.pug');
  }).catch(()=>{
    res.status(400).send("Item was not saved to the database")
  });
})

// Start the server
app.listen(port,()=>{
  console.log(`The application started successfully on port ${port}`);
})