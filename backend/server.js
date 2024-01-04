const express = require('express');
const notes = require('./data/notes');

const app = express();

app.listen(5000,console.log("Running on PORT 5000"));

app.get('/',(req,res) => {
    res.send("API is running");
})

app.get('/api/notes/:id',(req,res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
})