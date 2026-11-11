import * as http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(202, { "content-type": "text/plain" });
    res.end("welcome home page");
  } else if (req.url === "/about") {
    res.writeHead(202, { "content-type": "text/plain" });
    res.end("welcome to about page");
  } else if (req.url === "/contact") {
    res.writeHead(202, { "content-type": "text/plain" });
    res.end("welcome to about page");
  } else {
    res.writeHead(404,{'content-type':'text/plain'});
    res.end("page not found")
  }
});
 const port:number =6000
 server.listen(port, ()=>{
    console.log("server listening on port",port);
    
 })