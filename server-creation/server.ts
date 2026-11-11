import * as http from "http"
const server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type':`text/plain`})
    res.end("hello world")
})

const port:number=3000
server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
    
})