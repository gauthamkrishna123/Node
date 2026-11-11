import * as http from "http"
import { json } from "stream/consumers"

const port:number=6000

const server = http.createServer((req,res)=>{
    if (req.url === "/posts"){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify([
            {
                id:1,
                username:"gautham",
                caption:"enjoyyyyy 🏎️🏎️",
                likes:222
            },
            {
                id:2,
                username:"alexa",
                caption:"come onn  🏎️🏎️",
                likes:212
            },
        ]))
    }
    else if(req.url === '/posts/1'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify([
            {
                id:1,
                username:"gautham",
                caption:"enjoyyyyy 🏎️🏎️",
                likes:222
            
            }
        ]))
    }
        else if(req.url === '/users'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify([
            {
                id:1,
                username:"yedhu",
                age:25,
                job:"mechanical",
                
            
            },
                        {
                id:2,
                username:"alan",
                age:23,
                job:"computer engineer",
                
            
            },
        ]))
    }
    else if(req.url === '/followers'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify([
            {
                id:1,
                username:"arun",
                followig:4000,
                followers:434  
            },
                        {
                id:2,
                username:"alan",
                followig:4000,
                followers:434
                
            
            },
        ]))
    }
    else {
    res.writeHead(404,{'content-text':'text/plain'});
    res.end("page not found")
    }
})

server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
    
})