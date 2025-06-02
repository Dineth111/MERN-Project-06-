const mongoose = require('mongoose');

const EmplooyeeSchema = mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    NAME: {
        type: String,
        required: true
    },
    ADDRESS: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Emplooyee', EmplooyeeSchema);