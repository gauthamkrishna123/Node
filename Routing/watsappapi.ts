import * as http from "http"

const port :number =6000

const server = http.createServer((req,res)=>{
    if(req.method === "GET" && req.url === '/messages'){
        res.writeHead(200,{"content-type":'text/plain'})
        res.end("displaying all watsapp messages")
    }
    else if(req.method === "GET" && req.url === '/chats'){
        res.writeHead(200,{"content-type":'text/plain'})
        res.end("displaying all watsapp chats")
    }
    else if(req.method === "GET" && req.url === '/contacts'){
        res.writeHead(200,{"content-type":'text/plain'})
        res.end("displaying all watsapp contacts")
    }
     else if(req.method === "POST" && req.url === '/messages'){
        res.writeHead(200,{"content-type":'text/plain'})
        res.end("MESSAGE SEND SUCCESSFULLY")
    }
    else if(req.method === "PUT" && req.url === "/name"){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("name updated successfully")
    }
  else if(req.method === "DELETE" && req.url === "/messages"){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("messages deleted successfully")
    }else{
        res.writeHead(404,{'content-type':'text/plaiin'})
        res.end("page not found")
    }
})

server.listen(port, ()=>{
    console.log(`server listining on port${port}`);
    
})