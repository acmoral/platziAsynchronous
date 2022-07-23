const promise = new Promise(function (resolve,reject){
    resolve('hey');
});
const cows = 9;
const countCows = new Promise(function(resolve,reject){
    if(cows>10){
        resolve(`We have ${cows} on the farm`);
    }else{
        reject(`There are enough cows available`);
    }
});

countCows.then((result)=>{console.log(result);}).catch((error)=>{console.log(error);}).finally(()=>console.log("finally"));