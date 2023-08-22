const mongoose = require('mongoose')
// const { required } = require('nodemon/lib/config')

const chatSchema = mongoose.Schema({
    sender_id:{
        type:mongoose.Schema.Types.ObjectId,
        refer:'user'
    },
    receiver_id:{
        type:mongoose.Schema.Types.ObjectId,
        refer:'user'
    },
    message:{
        type:String,
        required:true
    }
},
    {timestamps : true}
)

module.exports = mongoose.Model('chat',chatSchema)