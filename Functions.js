console.log("Hello");

//  Q1 - FUnction defination
function square (num){
    return num * num;
};

console.log(square(5));

//  Q2- Function Expression
const squares = function (number){
    return number * number;
};

console.log(squares(7));


// Q3- First Class functiom

function cube (num){
 return num * num * num; 
};

function cubeIs (number){
   return  console.log("cube is" + number(2));
};
cubeIs(cube);

//  Q4 - IIFE Function

(function ok(numb){
    return console.log(numb * numb * numb);
}) (6);


//  Arrow Function -

function fn () {
    console.log(arguments);
};
fn(10,7);
