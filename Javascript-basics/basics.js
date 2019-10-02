
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


/*** program to rotate the string */

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}


/***  problem 72 */

function checkElement(nums){
    var end = nums.length -1;
    if (nums.length >= 1){
        return nums[0] == nums[end];
    }else{return false;}
}

console.log(checkElement([1,2,1]));

/***  is String */

function isString(input){
    console.log(typeof(input));
    if(typeof(input) == "string" ){
        
        return true;
    }else{
        return false;
    }
}

alert(isString([1,2,3]));