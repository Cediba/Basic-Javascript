function isEven(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));

console.log(isEven(21));

console.log(isEven(68));

console.log(isEven(333));



function factorial(num){
    var result = 1;

    for(var i = 1; i <= num; i++){
        result = result * i;
    }
    return result;
}

// factorial(4) 4 x 3 x 2 x 1


function kebabToSnake(str){
//replace all '-' with '_''s
//return str

var newstr = str.replace("-", "_");

return newstr;

}