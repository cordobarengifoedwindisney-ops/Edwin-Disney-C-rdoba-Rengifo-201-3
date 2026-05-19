import express from "express";
import fs from "fs";

const app = express ();
app.get("/",(req,res)=>{
    res.send("BIENVENIDO lA TIENDA COQUITOOOOO AMARILLO DE LA NEGRA MARIA JOSÉ SAS");


});

app.listen (3000,()=> {
    console.log ('servicio en espera, puerto 3000');
})
