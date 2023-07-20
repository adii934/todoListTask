const express=require('express')
const userRouter=express.Router()
const userRequests=require('../controllers/userController')
userRouter.post('/user',(req,res)=>{
  userRequests.user(req,res)
})
userRouter.get('/user/:email',async(req,res)=>{
    await userRequests.getUser(req,res)
})
userRouter.delete('/user/:email',async(req,res)=>{
  await userRequests.deleteUser(req,res)
})
userRouter.patch('/user/:email',async(req,res)=>{
  await userRequests.updateUser(req,res)
})
module.exports=userRouter
