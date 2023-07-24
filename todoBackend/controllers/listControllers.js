const express=require("express")
const listModel=require('../models/todo')
const userModel=require('../models/user')
const addList=async(req,res)=>{
    console.log("add",req.body)
    try{
        const collection=new listModel(req.body)
        console.log("COLLECTION",collection)
        collection.save()
        res.status(200).send(collection)
    }catch(e){
        res.status(500).send(e.toString())
    }
}

const addTask=async(req,res)=>{
    const {taskId,title,details,completed}=req.body
    console.log("req.body",req.body)
    console.log("req.params",req.params)
    try{
        const userTask=await listModel.findOne({email:req.params.email, listId:req.params.listId})
        console.log("User",userTask)
        const newTask=await listModel.findByIdAndUpdate({_id:userTask._id},{$push:{tasks:{taskId:taskId,title:title,details:details,completed:false}}},{new:true})
        newTask.save()
        res.send(newTask)
    }catch(e){
        res.status(500).send(e.toString())
    }
}
const updateTask=async(req,res)=>{
    console.log(req.params.email)
    try{
        const { title, details, completed } = req.body;
        if (!title) {
          return res.status(400).send("Title is required");
        }
    
        const updateObj = {
          "tasks.$.title": title,
          "tasks.$.completed": completed || false 
        };
    
        if (details !== undefined) {
          updateObj["tasks.$.details"] = details;
        }
    
        const response = await listModel.updateOne(
          {
            email: req.params.email,
            listId: req.params.listId,
            "tasks.taskId": req.params.taskId
          },
          {
            $set: updateObj
          },{new:true}
        );
    
        if (response.n === 0) {
          return res.status(404).send("Task not found");
        }
    
        res.status(200).send("Task updated successfully");
    }catch(e){
        res.status(500).send(e.toString())
    }

}
const deleteTask=async(req,res)=>{
    try{
       console.log(req)
       const response=await listModel.updateOne({
        email:req.params.email,
        listId:req.params.listId,
        // "tasks.taskId":req.params.taskId
       },
       {
        $pull:{tasks:{taskId:req.params.taskId}}
       },
       {new:true})
       console.log(response)
       res.status(200).send(response)
    }catch(e){
        res.status(500).send(e.toString())
    }
}
const getLists=async(req,res)=>{
    console.log(req.params.email)
    const res1=await userModel.findOne({email:req.params.email})
    console.log("res",res1)
    try{
        const response=await userModel.aggregate([
            {
                $lookup:{
                    from: 'lists',
                    localField:'email',
                    foreignField:'email',
                    as:'taskList'
                }
            }
        ])
        console.log("response",response)
        res.send(response)
    }catch(e){
        res.status(500).send(e.toString())
    }
   
}
const deleteList=async(req,res)=>{
    console.log("DDDDELE")
    console.log(req.params)
    try{
        const list=await listModel.findOne({email:req.params.email,listId:req.params.listId})
        console.log("list",list)
       const response=await listModel.findByIdAndDelete({_id:list._id},{new:true})
       console.log("DFDS",response)
       res.status(200).send(response)
    }catch(e){
        res.status(500).send(e.toString())
    }
}


const listRequests={
    addList:addList,
    addTask:addTask,
    getLists:getLists,
    updateTask:updateTask,
    deleteTask:deleteTask,
    deleteList:deleteList
}

module.exports=listRequests