const express =require("express");
const app=express ();
const PORT=3000;

app.get("/",(req,res) =>{
    res.sendfile(__dirname +"/views/port.html");
    app.use(express.static(__dirname+"/views"));
});
app.listen(PORT,() =>{
    console.log('server is running on http://localhost:3000');
});