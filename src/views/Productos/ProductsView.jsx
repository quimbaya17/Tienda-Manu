import React, { useEffect, useState } from "react";
import LayoutComponent from "../../components/Layout/LayoutComponent";
import ItemProducto from "../../components/productos/ItemProduct";

function ProductsView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <LayoutComponent>
      <div>
        <div className="flex w-full">
          <h1>Listado de productos</h1>
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {products?.map((product) => {
              <ItemProducto
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.images[0]}
              />;
            })}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}
export default ProductsView;
