var numA = parseInt(prompt("indica un numero A"));
var numB = parseInt(prompt("indica un numero B"));
var output = document.querySelector('#output');
output.textContent = "sono pari";

if(numB>numA){
    output.textContent ="B è più alto il suo valore è " + numB
    //console.log("B è più alto il suo valore è " + output)

} else if(numB<numA){
    output.textContent = "A è più alto il suo valore è " + numA
    //console.log("A è più alto il suo valore è " + output)
}