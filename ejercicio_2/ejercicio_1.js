//Recuperar la información de todos los productos (products).

const urlApi = 'https://fakestoreapi.com/products';

fetch (urlApi)
.then(response => {
    console.log(response);
    if(!response.ok){
        throw Error ('Error', error.status)
    }
    return response.json();
})
.then((datos)=>{
    console.log(datos);
})
.catch(error => {
    console.log(error);
})


