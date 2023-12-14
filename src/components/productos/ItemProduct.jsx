
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchDelete, fetchPut } from '../../logic/ApiHelper';

const ItemProducto = ({ id, nombre, descripcion, photo, precio }) => {
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    fetchDelete(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        if (response.ok) {
          navigate('/productos');
        } else {
          alert('No se pudo eliminar este producto');
        }
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  const updateProduct = () => {
    const updatedProductData = {
      title: 'Nuevo nombre',
      description: 'Nueva descripción',
    };

    fetchPut(`https://api.escuelajs.co/api/v1/products/${id}`, updatedProductData)
      .then((response) => {
        console.log(response);
        navigate('/productos');
      })
      .catch((error) => {
        console.error('Error al actualizar el producto:', error);
      });
  };

  return (
    <div className="mt-10 bg-white p-4  flex-1 flex-co rounded-lg shadow-lg">
      <img src={photo} alt="product" className="h-12 gap-0" />
      <h1 className="text-center text-blue-500 font-bold">{nombre}</h1>
      <p className="text-start font-medium mt-6">{descripcion}</p>
      <p className="text-start font-medium mt-6">Precio: {precio}</p>

      <button className="bg-blue-600 shadow-lg text-white rounded-lg p-2 mt-6 w-full">
        <NavLink to={`/Producto/${id}`}>Ver detalle</NavLink>
      </button>
      <button
        onClick={() => deleteProduct(id)}
        className="w-full mt-4 p-2 shadow-lg rounded-lg text-white bg-red-600"
      >
        Eliminar
      </button>

      <button
        onClick={() => updateProduct()}
        className="w-full mt-4 p-2 shadow-lg rounded-lg text-white bg-red-600"
      >
        Modificar
      </button>
    </div>
  );
};

ItemProducto.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};

export default ItemProducto;
