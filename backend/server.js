const express = require('express')
var cors = require('cors')
const app = express()
const Product= require('./model/product.js')
const mongoose = require('mongoose');
app.use(cors())
app.use(express.json());
mongoose.connect('mongodb+srv://root:ramisa12@cluster0.bppty.mongodb.net/mern?retryWrites=true&w=majority'
,()=>{
    console.log("DB connected")
})

app.post('/',(req,res)=>{
    const product={
        name:req.body.name,
        brand:req.body.brand,
        price:req.body.price,
        img:req.body.img,
        rating:req.body.rating,
    }
   const pro=new Product(product)
   pro.save()
})
app.get("/products",async(res,req)=>{
    const data= await Product.find({})
    req.send(data)
})
app.listen("8000",()=>{
    console.log("server running on port 8000")
})

//mongodb+srv://root:<password>@cluster0.bppty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority