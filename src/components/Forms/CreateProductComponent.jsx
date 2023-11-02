import React, { useState, useEffect } from "react";
import { fetchGet, fetchPost } from "../../logic/ApiHelper";
import { useNavigate } from "react-router-dom";

const CreateProductComponent = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescripcion] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [listCategories, setListCategories] = useState([]);

  const handleBtnRegistrar = async () => {
    
    const dataProduct = {
      title: title,
      price: price,
      description: description,
      categoryId: categoryId,
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.9N5TonKWl78wdJVfDUAkLQHaHa&pid=Api&P=0&h=180",
      ],
    };

    fetchPost("https://api.escuelajs.co/api/v1/products/", dataProduct).then(
      (response) => {
        if (response.id) {
          alert("Producto registrado con exito");
          navigate("/productos");
        }
      }
    );
  };

  useEffect(() => {
    fetchGet("https://api.escuelajs.co/api/v1/categories").then((response) => {
      setListCategories(response);
    });
  }, []);

  return (
    <div className="w-1/4">
      <div className="flex flex-col mt-4">
        <label className="col-lg" htmlFor="nameProduct">
          Nombre producto
        </label>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          placeholder="Nombre producto "
          name="nameProduct"
          className="p-2 shadow-lg rounded-lg relative"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="priceProduct">Precio producto</label>
        <input
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          type="text"
          placeholder="Precio producto"
          name="priceProduct"
          className="p-2 shadow-lg rounded-lg relative"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="priceProduct">Descripción</label>
        <input
          value={description}
          onChange={(event) => {
            setDescripcion(event.target.value);
          }}
          type="text"
          placeholder="Descripción"
          name="Descripcion"
          className="p-2 shadow-lg rounded-lg relative"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="priceProduct">Categoria</label>

        <select
          className="p-2 shadow-lg rounded-lg relative"
          onChange={(event) => {
            setCategoryId(event.target.value);
          }}
        >
          {listCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleBtnRegistrar}
        className="p-2 rounded-lg bg-green-400 text-white mt-6 mb-10 w-full"
      >
        Registrar producto
      </button>
    </div>
  );
};

export default CreateProductComponent;
