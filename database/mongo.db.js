import mongoose from 'mongoose';
import {configDotenv} from "dotenv";

configDotenv()

const Mongo = process.env.MONGO
const ConnectionMongodb = async()=>{

    try {
        await mongoose.connect(Mongo)
        console.log("conexion a mongodb exitosa");
    } catch(error){
        console.log("conexion fallida")
    }
}

export default ConnectionMongodb