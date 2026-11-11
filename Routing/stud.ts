import * as http from "http"

const server = http.createServer((req,res) =>{
    if(req.method === "GET" && req.url === '/student'){
        res.writeHead(200,{'content-Type':'text/plain'})
        res.end("displaying students")
    }
    else if(req.method === "POST" && req.url === "/student"){
         res.writeHead(200,{'content-Type':'text/plain'})
        res.end("student added successfully")
    }
    else if(req.method === "DELETE" && req.url === "/student"){
         res.writeHead(200,{'content-Type':'text/plain'})
        res.end("student Deleted successfully")
    }
        else if(req.method === "PUT" && req.url === "/student"){
         res.writeHead(200,{'content-Type':'text/plain'})
        res.end("student UPDATED successfully")
    }
        else if(req.method === "PATCH" && req.url === "/student"){
         res.writeHead(200,{'content-Type':'text/plain'})
        res.end("student UPDATED successfully")
    }
    else{
        res.writeHead(404,{'content-Type':'plain/text'})
        res.end("page not found")
    }
})

const port:number=6000;

server.listen(port,()=>{
    console.log('server lisitning on port',port);
    
})