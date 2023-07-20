const express=require("express")
const todoRoute=require('./routes/todoRoutes')
const app=express()
const mongoose=require('mongoose')
const userRouter = require("./routes/userRoutes")
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
let url=process.env.MONGO_URI
mongoose.connect('mongodb+srv://adilali:12345@adil.klapiyg.mongodb.net/?retryWrites=true&w=majority',connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
require('dotenv').config()
const port = '3500' | process.env.PORT
app.use(express.json())
app.use(todoRoute)
app.use(userRouter)

app.listen(3500,function(){
    console.log(`Server up and running at ${port}`)
})