import { useEffect, useState } from "react";
import LayoutComponent from "../../components/Layout/LayoutComponent";
import ItemProducto from "../../components/productos/ItemProduct";
import { fetchGet } from "../../logic/ApiHelper";
import { Link } from "react-router-dom";

function ProductsView() {
  const [manualidades, setManualidades] = useState([]);

  useEffect(() => {
    fetchGet("https://api.escuelajs.co/api/v1/products").then(
      (response) => {
        setManualidades(response);
      }
    );
  }, []);

  return (
    <LayoutComponent>
      <div className="mt-8">
        <Link
          className="p-2 bg-green-500 hover:bg-green-600 text-white text-lg rounded-lg shadow-lg float-right"
          to="/CreateProduct"
        >
          Crear Producto
        </Link>
      </div>

      {manualidades.length === 0 ? (
        <p className="mt-4">Cargando productos...</p>
      ) : (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-4">
          {manualidades.map((manualidad) => (
            <ItemProducto
              key={manualidad.id}
              id={manualidad.id}
              nombre={manualidad.title} 
              descripcion={manualidad.description} 
              photo={
                manualidad.images.length > 0
                  ? manualidad.images[0]
                  : 'URL_POR_DEFECTO_SI_NO_HAY_IMAGEN'
              } 
              precio={manualidad.price} 
            />
          ))}
        </div>
      )}
    </LayoutComponent>
  );
}

export default ProductsView;
