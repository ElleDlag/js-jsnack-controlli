var startNumber = [];
var i = 0;
var req, odd;
while(i<6){
    req = parseInt(prompt("inserisci un numero"));
    req = !(req % 2 == 0) ? startNumber.push(req) : null;
    i++;
    document.querySelector('#output').textContent = startNumber.sort();
}