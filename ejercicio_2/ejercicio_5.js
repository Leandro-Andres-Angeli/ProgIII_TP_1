function eliminarProducto(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) =>
      json
        ? console.log(`El producto con id: ${json.id} se eliminó exitosamente`)
        : console.error("Ocurrió un error")
    );
}
export default eliminarProducto;
