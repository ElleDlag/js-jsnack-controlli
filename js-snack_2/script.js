var a = prompt('Come ti chiami A?');
var b = prompt('Come ti chiami B?');
if (a.toLowerCase() === b.toLowerCase()) {
    console.log("La lunghezza dei nome è uguale e hanno lo stesso nome");
} else {
    if (a.length > b.length) {
        console.log("A si chiama " + a + " B si chiama " + b);
    } else if (a.length < b.length) {
        console.log("B si chiama " + b + " A si chiama " + a);
    } else { console.log("La lunghezza dei nome è uguale") }
}