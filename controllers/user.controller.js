import ModelUser from "../models/user.js";

const AgregarNuevoUsuario = async(req, res) => {
    const {name, edad, pass} = req.body

    try{

        let NewUser = ModelUser({name, edad, pass})
        NewUser.save()
        res.status(201).json({mjs: "usuario agregado exitosamente"})

    }catch (error){
        console.log({mjs: "hubo un error al agregar al usuario"}, error);
    }
}
export default AgregarNuevoUsuario