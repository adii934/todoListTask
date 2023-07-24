const mongoose=require('mongoose')
const listSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    listId:{
        type:String,
        required:true
    },
    tasks:Array
})
const listModel=mongoose.model('list',listSchema)
module.exports=listModel