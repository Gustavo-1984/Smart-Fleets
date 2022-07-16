const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const vehiculosController = require('../controllers/vehiculosController')

module.exports = function(){
    // Agragar nuevos usuarios
    router.post('/users', usersController.newUser)

    // Obtener todos los usuarios
    router.get('/users', usersController.viewUsers)

    // Muestra un cliente por id
    router.get('/users/:id', usersController.getUser)

    // Actualizar usuario
    router.put('/users/:id', usersController.updateUser)

    // Eliminar usuario
    router.delete('/users/:id', usersController.deleteUser)

    // Agregar vehiculo
    router.post('/vehiculos', vehiculosController.newVehiculo)

    // Obtener todos los vehiculos
    router.get('/vehiculos', vehiculosController.viewVehiculos)

    // Obtener vehiculo por id
    router.get('/vehiculos/:id', vehiculosController.getVehiculo )

    // Actualizar vehiculo por id
    router.put('/vehiculos/:id', vehiculosController.updateVehiculo)

    return router
}