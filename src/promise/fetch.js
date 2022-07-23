import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi){
    return fetch(urlApi); //this returns a promise 
};

// fetchData(`${API}/products`)
//     .then(response=>response.json()) // it is understood that the second parameter failure callback is not passed
//     .then(products=>{console.log(products);})
//     .then(()=>{console.log("hola");})
//     .catch(error=>console.log(error));

fetchData(`${API}/products`)
    .then(response=>response.json())//if successfull first call then returns response converted to json
    .then(products =>{return fetchData(`${API}/products/${products[0].id}`)})//receives the resul.json as products and does a second promise a chain
    .then(response=>response.json())//returns response converted to json
    .then(product=>{return fetchData(`${API}/categories/${product.category.id}`)})// so on same as the previous ones
    .then(response=>response.json())
    .then(category =>{console.log(category.name);})
    .catch(err=>console.log(err))
    .finally(()=>console.log('finally'))