let celcius = document.getElementById("celcius");
let fahreneit = document.getElementById("fahren");
function celToFaR(){
    let output = (parseFloat(celcius.value) * 9/5) + 32;
    fahreneit.value = parseFloat(output).toFixed(2);
    console.log(output);
}
function farToCel(){
    let output = (parseFloat(fahreneit.value) - 32) * 5/9;
    celcius.value = parseFloat(output).toFixed(2);
    console.log(output);
}