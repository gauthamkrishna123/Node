import * as http from 'http'
import * as url from 'url'
import * as fs from 'fs'

const server = http.createServer((req,res) =>{
    const urlparse = url.parse(req.url || "",true)
    console.log('url:',urlparse);

    if(urlparse.pathname === '/greet' && urlparse.query.name){

        const name = urlparse.query.name as string
        console.log('name:',name);

        fs.readFile('greeting.html','utf8',(errr,data)=>{

            if(errr){
                res.writeHead(500,{'content-type':'text/plain'})
                res.end("server error")
            }
            const dynamichtml = data.replace('{{name}}',name)
            res.writeHead(200,{'content-type':'text/plain'})
            res.end(dynamichtml)
        })
        
    }
    else{
        res.writeHead(500,{'content-type':'text/plain'})
        res.end('welcome please provide a name in the url eg:/greet?name=gautham')
    }
})

const port:number =7000

server.listen(port, ()=>{
    console.log("server listening on port",port);
    
})