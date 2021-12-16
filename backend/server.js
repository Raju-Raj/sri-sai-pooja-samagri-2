import express from 'express';

import dotenv from 'dotenv';

const app=express();

import products from './data/products.js'

app.get('/api/products',(req,res)=>{
    res.json(products)
})
//setting api for single product listing 
app.get('/api/products/:id',(req,res)=>{
    const product=products.find((p)=>p._id===req.params.id)//checking id in url and matching with json id
    res.json(product)
})
app.listen(5000,console.log(`Server is runing in 5080 mode on port 5000`))