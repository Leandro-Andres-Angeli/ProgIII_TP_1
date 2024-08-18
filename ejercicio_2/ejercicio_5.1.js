function eliminarProducto(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (!json) {
        throw Error('Ocurrió un error');
      }

      console.log(`El producto con id: ${json.id} se eliminó exitosamente`);
    })
    .catch((err) => {
      console.error(err.message);
    });
}

eliminarProducto(99);
