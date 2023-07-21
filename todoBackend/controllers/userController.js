const userSchema=require('../models/user')

const user=async(req,res)=>{
    console.log(req.body)
    try{
        const collection=new userSchema(req.body)
        collection.save()
        res.status(200).send(collection.toString())
    }catch(e){
        res.status(400).send(e.toString())
    }
}
const getUser=async(req,res)=>{
    
    try{
       const user=await userSchema.find()
       console.log("user",user)
       res.status(200).send(user)
    }catch(e){
        res.status(400).send(e.toString())
    }
}
const deleteUser=async(req,res)=>{
    try{
      const user=await userSchema.findOne({email:req.params.email})
      console.log("user",user)
      await userSchema.findByIdAndDelete({_id:user._id})
      res.status(200).send(user.toString())
    }catch(e){
        res.status(400).send(e.toString())
    }
}
const updateUser=async(req,res)=>{
    try{
        const user=await userSchema.findOne({email:req.params.email})
        console.log("user",user)
        const updatedUser = await userSchema.findByIdAndUpdate({_id:user._id},req.body,{new:true})
        updatedUser.save()
        res.status(200).send(updatedUser.toString())
    }catch(e){
        console.log(e)
        res.status(400).send(e.toString())
    }
}
const userRequests={
    user:user,
    getUser:getUser,
    deleteUser:deleteUser,
    updateUser:updateUser
}
module.exports=userRequests