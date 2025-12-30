import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()
app.use(cors())

app.use(express.json())
app.get("/",(req,res)=>{
  res.send("Hello")
})

const port = process.env.PORT || 4000;
app.listen(process.env.PORT,()=>{
  console.log("Server is running on port 3000")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
