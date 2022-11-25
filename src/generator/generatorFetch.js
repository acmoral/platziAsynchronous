import fetch from "node-fetch";
const API  ='https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const request = await fetch(urlApi);
    const data = await request.json()
    return data;
}

async function* apiCall(urlApi){
    const products = await fetchData(`${urlApi}/products`);
    yield console.log(products);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    yield  console.log(product);
    const category = await fetchData(`${urlApi}/products/${product.category.id}`);
    yield  console.log(category);
    return "all has been yielded";
}

const dataGetter = apiCall(API);
console.log('0')
dataGetter.next();
console.log('1')
dataGetter.next();
console.log('2')
dataGetter.next();
console.log('3')
dataGetter.next();
console.log('4')