//Agregar un nuevo producto (product).

const urlApi = 'https://fakestoreapi.com/products';

async function agregarProducto(objeto) {
  try {
    const response = await fetch(urlApi, {
      method: 'POST',
      body: JSON.stringify(objeto),
    });

    if (response.status !== 200) {
      throw new Error('error', response.status);
    }

    const datos = await response.json();
    console.log('producto agregado', datos);
  } catch (error) {
    console.log(error);
  }
}

const productoNuevo = {
  id: 21,
  title: 'Camperas de abrigo',
  price: 250.5,
  description:
    '70%Cotton,10%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
  category: 'Ropa de mujer',
  image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
  rating: { rate: 3.6, count: 145 },
};
agregarProducto(productoNuevo);
