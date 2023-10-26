import React from "react";
import { NavLink } from "react-router-dom";

const ItemProducto = ({ id, title, description, images }) => {
  return (
    <div className="mt-10 bg-white p-4  flex-1 flex-co rounded-lg shadow-lg">
      <img src={images} alt="product" className="h-12 gap-0" />
      <h1 className="text-center text-blue-500 font-bold">{title}</h1>
      <p className="text-start font-medium mt-6">{description}</p>
      <button className="bg-blue-600 shadow-lg text-white rounded-lg p-2 mt-6">
        <NavLink to= {`/Producto/${id}`} >

        Ver detalle
        </NavLink>
        
      </button>
    </div>
  );
};

export default ItemProducto;
