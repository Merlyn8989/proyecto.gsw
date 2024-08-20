import mongoose from "mongoose";

const NewModeluser = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    edad : {
        type: String,
        require: true
    },
    pass : {
        type: String,
        require: true
    }
})

const ModelUser = mongoose.model('users', NewModeluser)

export default ModelUser

