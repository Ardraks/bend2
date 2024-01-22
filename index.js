const express=require("express")
const cors=require("cors")
const db=require("./connection/Database")


const loginrouter=require('./routes/Loginroute')
const writerouter=require('./routes/Writeroute')
const updaterouter=require('./routes/Updateroute')


const updatemodel = require('./model/Update')
const loginmodel = require('./model/Login')
const writemodel = require('./model/Write')

const  app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.get('/',(request,response)=>{
    response.send("hai")
})
app.use("/login",loginrouter)
app.use("/update",updaterouter)
app.use("/write",writerouter)



app.listen(4005,(request,response)=>{
    console.log("port is running in 4005")
})
