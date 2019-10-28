//@ts-check
//function in es6
//experiment object, function callback and closure.
//global var
var dom = document;
var btnVerify = dom.querySelector('.verify-btn');
//var elOutput =  dom.querySelectorAll('.result p');
//text to output
//creation a obj for execution;

var objStart = {
    //every dom element 'all' for querySelectorAll()
    //----------------- 'one' for querySelector()
    'domEl': (domVal,qty)=>{
        var domEl
        if(qty == 'all'){
            domEl = dom.querySelectorAll(domVal);
        } else if (qty == 'one'){ 
            domEl = dom.querySelector(domVal);
        }
        return domEl;
},
    'printText':(elOutput,qty,textA,origin)=>{
        var demo = origin(elOutput,qty);
        if(qty == 'all'){
            demo.forEach(el => {
                el.textContent = textA
            });
        } else{
            demo.textContent = textA
        }
        return textA
    },
    'getInput':(elOutput,qty,origin)=>{
        var demo = origin(elOutput,qty);
        var inpValue;
        if(qty == 'all'){
            demo.forEach(el => {
                inpValue = el.value
            });
        } else{
               inpValue = demo.value
        };
        return inpValue;
    }
}
btnVerify.addEventListener('click', ()=>{
    //objStart.getInput('.form-control','all',objStart.domEl);
    //objStart.printText('#testSingolo','one',"presto piove",objStart.domEl)
    objStart.printText('.minmax','all',"presto piove",objStart.domEl)
})
/* console.log(objStart.printText('.minmax',"ehilà",objStart.output))  */




//OLD VERSION

//execution based on click of btnVerify dom element
/* btnVerify.forEach((btn,idx) => {
    btn.addEventListener('click', ()=>{
        switch (elOutput[idx].className) {
            case 'minmax':
                output('.minmax').textContent = "Risultato Numero"
                break;
            case 'nameLength':
                output('.nameLength').textContent = "Risultato nome"
                break;
            default:
                break;
        }
    })
}); */





/* #region ex1 */
/* var numA = parseInt(prompt("indica un numero A"));
var numB = parseInt(prompt("indica un numero B"));

var output = document.querySelector('#output');
output.textContent = "sono pari";

if(numB>numA){
    output.textContent ="B è più alto il suo valore è " + numB
    //console.log("B è più alto il suo valore è " + output)

} else if(numB<numA){
    output.textContent = "A è più alto il suo valore è " + numA
    //console.log("A è più alto il suo valore è " + output)
} */


/* #endregion */


/* #region [ex2] */
/* var a = prompt('Come ti chiami A?');
var b = prompt('Come ti chiami B?');
if (a.toLowerCase() === b.toLowerCase()) {
    console.log("La lunghezza dei nome è uguale e hanno lo stesso nome");
} else {
    if (a.length > b.length) {
        console.log("A si chiama " + a + " B si chiama " + b);
    } else if (a.length < b.length) {
        console.log("B si chiama " + b + " A si chiama " + a);
    } else { console.log("La lunghezza dei nome è uguale") }
} */
/* #endregion */


/* #region [ex3] */
/* var output = ""; */
/* var x = 0
for(var i = 0;i<5;i++){
      var n = paexarseInt(prompt("inserisci un numero"));
      x += n;
}
console.log(x) */
/* #endregion */


/* #region [ex4] */
/* var host = ["Jhon","paul","alex","daniel"];
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
} */
/* #endregion */


/* #region [ex5] */
//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
//un numero, se è dispari inseriscilo nell’array.
/* var startNumber = [];
var i = 0;
var req, odd;
while(i<6){
    req = parseInt(prompt("inserisci un numero"));
    req = !(req % 2 == 0) ? startNumber.push(req) : null;
    i++;
    console.log(startNumber);
} */
/* #endregion */