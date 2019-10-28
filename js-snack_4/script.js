//@ts-check
var host = ["Jhon","paul","alex","daniel"];
var invite = prompt("Scusi chi è lei?").toLowerCase();
var bool = false;
var i = 0;

while(i<host.length && bool == false) {
    if(invite == host[i].toLowerCase()){
        bool = true;
    }
    i++;
}
if(bool){
    console.log("sei invitato");
} else{
    console.log("non sei invitato");
} 