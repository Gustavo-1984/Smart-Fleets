const Users = require('../models/Users')
const mqtt = require('mqtt')

exports.newUser = async (req, res, next) =>{
    const user = new Users(req.body);
    try {
        await user.save();
        res.json({message: 'Usuario agregado correctamente'})
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.viewUsers = async (req, res, next) =>{
    try {
        const users = await Users.find({});
        res.json(users)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getUser = async (req, res, next) =>{
    try {
        const user = await Users.findById(req.params.id);
        res.json(user)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updateUser = async (req, res, next) =>{
    try {
        const user = await Users.findOneAndUpdate({_id: req.params.id}, 
            req.body,{
                new: true
        });
        res.json(user)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deleteUser = async (req, res, next) =>{
    try {
        await Users.findOneAndDelete({_id: req.params.id})
        res.json({message: 'El usuario ha sido eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.connection.connect(function(err) {

})