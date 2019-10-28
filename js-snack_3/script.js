
var x = 0
for(var i = 0;i<5;i++){
      var n = parseInt(prompt("inserisci un numero"));
      x += n;
}
document.querySelector('#output').textContent = "la somma dei numeri inseriti è: "+ x