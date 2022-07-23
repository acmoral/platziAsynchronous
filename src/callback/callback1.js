// the sum function
function sum(num1,num2){
    return num1 +num2;
};
//function that callsback the sum function
function calc(num1,num2,callback){
    return callback(num1,num2);
};
//print the result 
console.log(calc(1,2,sum));
// Times out 2 seconds
setTimeout(function(){console.log("Hi there");},2000);

// in the previous time out we used an anonimous function, lets use a named one

function gretting(name){
    console.log(`Hola ${name}`);
};

setTimeout(gretting, 2000,"Andrea");