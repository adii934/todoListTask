const express=require('express')

const listRouter=express.Router()
const listControllers=require('../controllers/listControllers')
listRouter.post('/list',async(req,res)=>{
   await listControllers.addList(req,res)
})
listRouter.delete('/list/:email/:listId',async(req,res)=>{
    await listControllers.deleteList(req,res)
})
listRouter.patch('/list/:email/:listId',async(req,res)=>{
    await listControllers.addTask(req,res)
})
listRouter.patch('/list/task/:email/:listId/:taskId',async(req,res)=>{
    console.log("FFFFFFFFF")
    await listControllers.updateTask(req,res)
})
listRouter.delete('/list/task/:email/:listId/:taskId',async(req,res)=>{
    console.log("DD",req.params)
    await listControllers.deleteTask(req,res)
})
listRouter.get('/list/:email',async(req,res)=>{
    await listControllers.getLists(req,res)
})
module.exports=listRouter