const productos = [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 20 },
    { nombre: "Producto 3", precio: 30 }
  ];
  
  let carrito = [];
  
  function agregarAlCarrito(index) {
    carrito.push(productos[index - 1]);
    mostrarCarrito();
  }
  
  function mostrarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const totalElemento = document.getElementById("total");
    carritoLista.innerHTML = "";
    let total = 0;
    carrito.forEach(producto => {
      const li = document.createElement("li");
      li.innerText = `${producto.nombre} - Precio: $${producto.precio}`;
      carritoLista.appendChild(li);
      total += producto.precio;
    });
    totalElemento.innerText = `Total: $${total}`;
  }
  