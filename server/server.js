const express = require('express');
const mongoose = require('mongoose');


// MIDDLEWARE
const app = express();
app.use(express.json());

// MONGO DATABASE
mongoose.connect('mongodb+srv://vladzizic:IWKhFXpvCEkmaAWt@cluster0.7jw4ap3.mongodb.net/?retryWrites=true&w=majority',{

})
.then(()=> console.log('Connected to DB'))
.catch(console.error);


app.listen(3000, () => console.log('Server started on port 3000'));