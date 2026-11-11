//not core module  ..   anti gravity
import * as readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function handleregester(){
    rl.question("enter name:",(name:string)=>{
        rl.question("enter email:",(email:string)=>{
            console.log(`${name} your email ${email} is regestered successfully`);
            rl.close()
        })
    })
}
handleregester()