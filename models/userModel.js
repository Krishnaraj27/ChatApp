const mongoose = require('mongoose')
// const { required } = require('nodemon/lib/config')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    is_online:{
        type:Boolean,
        default:false
    }
},
    {timestamps : true}
)

module.exports = mongoose.Model('user',userSchema)