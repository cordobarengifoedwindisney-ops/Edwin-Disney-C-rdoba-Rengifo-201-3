// const express = require ('express')
import express from "express"; 

const app = express ()
const port = 3000

app.get("/",(req,res)=>{
    res.send("BIENVENIDO lA TIENDA COQUITOOOOO AMARILLO DE LA NEGRA MARIA JOSÉ SAS");


});

app.listen (3000,()=> {
    console.log (`example app listenig on port ${port} `);
})
