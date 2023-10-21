import React from "react";
import LayoutComponent from "../../components/Layout/LayoutComponent";
import { Link } from "react-router-dom";

function ProductsView() {
  return (
    <LayoutComponent>
      <div>
        <div className="flex w-full">
          <h1>Listado de productos</h1>
          <Link
            to="/CreateProduct"
            className="justify-end float-right bottom-2 bg-green-600 rounded-lg p-2 text-white border-l"
          >
            Crear nuevo producto
          </Link>
        </div>
      </div>
    </LayoutComponent>
  );
}
export default ProductsView;
