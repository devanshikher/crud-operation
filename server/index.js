const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url=== '/Devanshi'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("Hello Everyone!");
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("Not Found");
    }
});

server.listen(3001,()=>{
    console.log("Server is running on http://localhost:3000/devanshi")
})
