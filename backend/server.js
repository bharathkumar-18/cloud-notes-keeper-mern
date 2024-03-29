const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//Start express server
const app = express();
dotenv.config();
//Connect to MongoDB with mongoose
connectDB();
app.get('/',(req,res) => {
    res.send("API is running");
})

const PORT = process.env.PORT || 6000;

app.get('/api/notes', (req,res)=>{
    res.send(notes);
})

app.get('/api/notes/:id',(req,res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
})

app.listen(PORT,console.log(`Running on PORT ${PORT}`));