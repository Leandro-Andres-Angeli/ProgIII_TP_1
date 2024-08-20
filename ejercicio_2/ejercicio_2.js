//Recuperar la información de un número limitado de productos (products).

const urlApi = 'https://fakestoreapi.com/products?limit=10'


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
