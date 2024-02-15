import React from "react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal, eliminarProducto } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to="/"> Ver Productos </Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((prod) => (
        <div key={prod.id}>
          {" "}
          <CartItem {...prod} />
          <button onClick={() => eliminarProducto(prod.item.id)}>
            {" "}
            Eliminar Producto{" "}
          </button>
        </div>
      ))}

      <h3> Total: $ {total} </h3>
      <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
      <Link to="/.">
        <button type="button" className="btn btn-info">
          Seguir Comprando
        </button>
      </Link>
      <Link to="/checkout"> Finalizar Compra </Link>
    </div>
  );
};

export default Cart;
