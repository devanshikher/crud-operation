import express from'express';

import path from'path';
import {fileURLToPath} from'url';


const app=express();

const __filename =fileURLToPath(import.meta.url);
const __dirname =path.direname(__filename);

const PORT =8000;

app.get("/",(req,res)=>{
    res.sendFile("path.join"(__direname,"view","cafe.html"))

})

app.use(express.static("path.join"(__direname,"view")))

app.listen(PORT,()=>{console.log("Server is running on http://localhost:3000/Devanshi")})
    
