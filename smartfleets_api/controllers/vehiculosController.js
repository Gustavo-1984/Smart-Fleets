const Vehiculos = require('../models/Vehiculos')

exports.newVehiculo = async (req, res, next) =>{
    const vehiculo = new Vehiculos(req.body);
    try {
        await vehiculo.save();
        res.json({message: 'Vehiculo agregado correctamente'})
    } catch (error) {
        res.send(error)
        next()
    }
}

exports.viewVehiculos = async (req, res, next) =>{
    try {
        const vehiculos = await Vehiculos.find({});
        res.json(vehiculos)
    } catch (error) {
        console.log(error);
        next();
    }
}

 exports.getVehiculo = async (req, res, next) =>{
     try {
         const vehiculo = await Vehiculos.findById(req.params.id);
         res.json(vehiculo)
     } catch (error) {
         console.log(error);
         next();
     }
 }

 exports.updateVehiculo = async (req, res, next) =>{
     try {
         const vehiculo = await Vehiculos.findOneAndUpdate({_id: req.params.id}, 
             req.body,{
                 new: true
         });
         res.json(vehiculo)
     } catch (error) {
         console.log(error);
         next();
     }
 }

// exports.deleteUser = async (req, res, next) =>{
//     try {
//         await Users.findOneAndDelete({_id: req.params.id})
//         res.json({message: 'El usuario ha sido eliminado'})
//     } catch (error) {
//         console.log(error);
//         next();
//     }
// }