function eliminarProducto(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.status !== 200) {
        throw Error(`Error ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      if (json === null) {
        throw Error('Producto no encontrado');
      }

      console.log(`El producto con id: ${json.id} se eliminó exitosamente`);
    })
    .catch((err) => {
      console.error(err.message);
    });
}

eliminarProducto(1);
