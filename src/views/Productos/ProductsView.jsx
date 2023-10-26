import React, { useEffect, useState } from "react";
import LayoutComponent from "../../components/Layout/LayoutComponent";
import ItemProducto from "../../components/productos/ItemProduct";
import { fetchGet } from "../../logic/ApiHelper";

function ProductsView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchGet("https://api.escuelajs.co/api/v1/products").then((response) => {
      setProducts(response);
    });    
  }, []);

  return (
    <LayoutComponent>
      <div>
        <div className="flex w-full">
          <h1>Listado de productos</h1>
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {products?.map((product) => (
              <ItemProducto
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                images={product.images[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}
export default ProductsView;
