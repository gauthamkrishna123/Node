import * as http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/messages") {
    let body =  "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      //check if body is empty
      if (!body) {
        res.writeHead(400, { "content-type": "text/plain" });
    
    
    res.end(
      JSON.stringify({
        success: false,
        message: "request body is empty",
      }),
    );
    return;
}
  try {
    //convert json string into javascript object
    const message = JSON.parse(body);
    res.writeHead(201, { "content-type": "text/plain" });
    res.end(
      JSON.stringify({
        success: true,
        message: "message send successfully",
        data: message,
      }),
    );
  } catch (error) {
    res.writeHead(400, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "invalid json format",
      }),
    );
  }})
  }
  else if(req.method=== "GET" && req.url === "/messages"){
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify({
        message:"displaying all messages"
    }));
  }else{
    res.writeHead(404,{
        "content-type":'application/json'
    })
    res.end(JSON.stringify({
        message:"rout not found"
    }))
  }
});

const port: number = 6000;

server.listen(port);
