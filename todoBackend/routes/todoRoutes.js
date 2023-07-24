const express=require('express')
const todoRoute=express.Router()
const requests=require('../controllers/todoController')



todoRoute.post('/task',async(req,res)=>{
    requests.addTask(req,res)
})
todoRoute.get('/task',async(req,res)=>{
    await requests.getTasks(req,res)
})
todoRoute.get('/task/:taskId',async(req,res)=>{
    await requests.getTask(req,res)
})
todoRoute.patch('/task/:taskId',async(req,res)=>{
    await requests.updateTask(req,res)
})
todoRoute.delete('/task/:taskId',async(req,res)=>{
    await requests.deleteTask(req,res)
})

module.exports=todoRoute