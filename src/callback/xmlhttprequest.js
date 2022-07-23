// call the xml http request to use the platzi api
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

//create a function that receives the url and that does a callback after the answer has been received
// this was what was used before but people don't use this anymore
function fetchData(urlapi,callback){
         let xhttp = new XMLHttpRequest();
         xhttp.open('GET',urlapi,true); // GET tipo de petición. This is not the request on it self, 
         //it must be invoked to validate the method and URL
         // - 0 not initialized - 1 loading  - 2 ya se ejectuto send - 3 interactuando - 4 ready
         xhttp.onreadystatechange =  function(event){ 
            if(xhttp.readyState===4){
                // 200 status equal to success
                if(xhttp.status ===200){
                    callback(null, JSON.parse(xhttp.responseText));
                }
                else{
                    const error = new Error('Error :' + urlapi);
                    return callback(error,null);
                }
            }
         } ; // this is the callback function, when the state of xhttp is changed and successfull the callback will be invoked
         xhttp.send();
}

fetchData(`${API}/products`,function(error1,data1){
    if(error1) console.log(error1);
    fetchData(`${API}/products/${data1[0].id}`,function(error2,data2){
        if(error2) return console.log(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if(error3) return console.log(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
});