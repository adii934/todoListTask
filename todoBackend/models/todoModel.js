const mongoose=require('mongoose')
const todoSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    listId:{
        type:String,
        required:true
    },
    taskId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:String
    },
    completed:{
        type:Boolean,
        required:true,
    }
})
const todoModel=mongoose.model('todoList',todoSchema)
module.exports=todoModel