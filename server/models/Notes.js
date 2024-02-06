const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    note: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    }
});

const Notes = mongoose.model('Notes', NotesSchema);
module.exports = Notes;