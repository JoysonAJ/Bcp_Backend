const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/users.model');
const { request } = require('express');
const { response } = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri=process.env.ATLAS_URI

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("connected")
})


app.use(cors());
app.use(express.json());

app.get(`/`,(req,res)=>{
    res.send(`Heloo world`)

});

app.get('/add',(req,res)=>{
    const nuser = new User({'username':'user','id':'001'});
    nuser.save()
    .then(()=>{console.log(`saved`)})
    .catch(e=>{console.log(e)})
})

app.get('/get',(req,res)=>{
    User.findOne({'username':'user'})
    .then(data=>{
        console.log(data.username)
        console.log(data.id)})
})
app.listen(port,()=>{
    console.log(`port is active ${port}`);
});