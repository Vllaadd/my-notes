const express = require('express');
const mongoose = require('mongoose');
const Notes = require('./models/Notes');


// MIDDLEWARE
const app = express();
app.use(express.json());

// MONGO DATABASE
mongoose.connect('mongodb+srv://vladzizic:IWKhFXpvCEkmaAWt@cluster0.7jw4ap3.mongodb.net/?retryWrites=true&w=majority',{

})
.then(()=> console.log('Connected to DB'))
.catch(console.error);

// ROUTES
app.get('/', async(req, res) => {
    try{
        const allNotes = await Notes.find();
        res.status(200).json(allNotes)
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


app.listen(3000, () => console.log('Server started on port 3000'));