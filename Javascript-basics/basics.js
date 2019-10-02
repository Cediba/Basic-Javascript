
/*** show date in the page and console */
var d = new Date();

document.getElementById("demo").innerHTML = d;

console.log(d);


/*** area of a triangle */

function getAreaOfTriangle(side1, side2, side3){
    var p = (side1+side2+side3)/2;
    var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
    return a;
}

document.getElementById("demo1").innerHTML = (getAreaOfTriangle(5,6,7));