const express=require('express')
const todoModel=require('../models/todoModel')
const addTask=async(req,res)=>{
    console.log("add",req.body)
    try{
        const collection=new todoModel(req.body)
        collection.save()
        res.status(200).send(collection)
    }catch(e){
        res.status(500).send(e.toString())
    }
}
const getTasks=async(req,res)=>{
    try{
        const tasks=await todoModel.find()
        console.log(tasks)
        res.status(200).send(tasks)
    }catch(e){
        res.status(500).send(e.toString())
    }
}
const getTask=async(req,res)=>{
    try{
        const task=await todoModel.findOne({taskId:req.params.taskId})
        console.log('task',task)
        res.status(200).send(task)
    }catch(e){
        res.status(400).send(e.toString())
    }
}
const updateTask=async(req,res)=>{
    console.log("Update",req.body)
    try{
        const task=await todoModel.findOne({taskId:req.params.taskId})
        const updatedTask=await todoModel.findByIdAndUpdate({_id:task._id},req.body,{new:true})
        console.log("task",updatedTask)
        updatedTask.save()
        res.status(200).send(updatedTask)
    }catch(e){
        res.status(400).send(e.toString())
    }
}
const deleteTask=async(req,res)=>{
    console.log("taskID",req.params.taskId)
    try{
        const task=await todoModel.findOne({taskId:req.params.taskId})
        const deletedTask=await todoModel.findByIdAndDelete({_id:task._id})
        console.log("task",deletedTask)
        res.status(200).send(deletedTask)
    }catch(e){
        res.status(400).send(e.toString())
    }
}
const requests={
    addTask:addTask,
    getTasks:getTasks,
    getTask:getTask,
    updateTask:updateTask,
    deleteTask:deleteTask
}

module.exports=requests