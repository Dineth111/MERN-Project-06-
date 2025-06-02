const express = require("express");
const Employee = require('../modele/Emplooyee');

const router = express.Router();

// testing
router.get('/test', (req, res) => res.send("Employee route is working.."));

// insert/create function
router.post('/', (req, res) => {
    Employee.create(req.body)
        .then(() => res.json({ msg: "Employee added successfully" }))
        .catch(() => res.status(400).json({ msg: "Employee addition failed" }));
});

// get/retrieve the data
router.get('/', (req, res) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json({ msg: "No user found" }));
});

// get value by id
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json({ msg: "Can't find this employee" }));
});

// update
router.put('/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json({ msg: "Update successful.." }))
        .catch(err => res.status(400).json({ msg: "Update failed" }));
});

// delete
router.delete('/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "Delete successful." }))
        .catch(err => res.status(400).json({ msg: "Can't delete" }));
});

module.exports = router; // export router function