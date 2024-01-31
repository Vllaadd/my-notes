const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    note: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    }
});

const Notes = mongoose.model('Notes', NotesSchema);
module.exports = Notes;