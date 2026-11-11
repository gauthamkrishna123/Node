import { EventEmitter } from "events";

const event = new EventEmitter();

event.on("greet",(name:string) =>{
    console.log(`hello ${name}, welcome`);
    
})
event.emit("greet",'students')