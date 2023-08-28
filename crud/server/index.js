
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import useRoutes from "./routes/users.js";

const app=express();
const port =5000;

app.use(bodyParser.json());
app.use(cors())
app.use("/",useRoutes)

app.get("/",(req,res)=>{
    res.send("hello....")
})
app.all("*",(req,res)=>{
    res.send("that routes doesn't exits")
})

app.listen(port,()=>{
    console.log(`server  is lisetining on port:http://localhost:${port}`);
})