const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post('/users', (req, res) => {
    const user = new userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//devolver todos los user
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//devolver un solo user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const {name, age, email } = req.body;
    userSchema
    .updateOne({ _id: id}, {$set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
