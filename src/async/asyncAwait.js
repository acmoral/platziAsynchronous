const fnAsync = () =>{
    console.log('fnasync enters')
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('Async'),2000)
        : reject(new Error('Error'));
    });
}
// async and await don't block the app just the another function stream
const AnotherFunction = async () => {
    console.log('anotherfunction enters')
    const something = await fnAsync();
    console.log('just after something is resolved')
    console.log(something);
    console.log('Hello')
}
console.log('before');
AnotherFunction();
console.log('after');