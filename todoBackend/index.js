const express=require("express")
const bodyParser=require('body-parser')
const todoRoute=require('./routes/todoRoutes')
const listRouter=require('./routes/lisRoutes')
const app=express()

const cors=require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
const mongoose=require('mongoose')
const userRouter = require("./routes/userRoutes")
const { json } = require("body-parser")
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
app.use(json())
app.use(todoRoute)
app.use(userRouter)
app.use(listRouter)

app.listen(3500,function(){
    console.log(`Server up and running at ${port}`)
})