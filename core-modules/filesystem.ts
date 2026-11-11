import * as fs from 'fs';

fs.writeFile(`./hello.txt`,`this is a file`, (err) =>{
    if(err) throw err
    console.log("created");

    fs.readFile(`./hello.txt`,'utf8',(err,content) =>{
        if(err) throw err
        console.log(content);

        fs.appendFile(`./hello.txt`,"this is another file",(err1) =>{
            if(err1) throw err1
           
            fs.readFile(`./hello.txt`,'utf-8',(err,content)=>{
                if (err) throw err;
                console.log(content);
                
                fs.rename(`./hello.txt`,'welcome.txt',(renameerr) =>{
                    if (renameerr) throw renameerr;

                    fs.unlink(`./welcome.txt`,(dlterr)=>{
                        if(dlterr) throw dlterr

                        console.log("file deleted");
                        
                    })
                })
            })
        })
    })
    
} )