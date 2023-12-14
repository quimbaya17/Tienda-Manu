import  { useState, useEffect } from "react";
import { fetchGet, fetchPost } from "../../logic/ApiHelper";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateProductComponent = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const [listCategories, setListCategories] = useState([]);
  const navigate = useNavigate();

  const onHandleSubmit = handleSubmit((data) => {
    const productData = {
      title: data.nameProduct,
      price: data.priceProduct,
      description: data.description,
      // Otras propiedades según la API
    };

    // Ajusta la URL según la estructura de tu API
    fetchPost("https://api.escuelajs.co/api/v1/products", productData)
      .then((response) => {
        console.log(response);
        navigate("/Productos");
      })
      .catch((error) => {
        console.error("Error al crear el producto:", error);
      });
  });

  useEffect(() => {
    // Ajusta la URL según la estructura de tu API
    fetchGet("https://api.escuelajs.co/api/v1/categories").then(
      (response) => {
        setListCategories(response);
      }
    );
  }, []);

  return (
    <form onSubmit={onHandleSubmit} className="w-1/4">
      <div className="flex flex-col mt-4">
        <label className="col-lg" htmlFor="nameProduct">
          Nombre producto
        </label>
        <input
          type="text"
          placeholder="Nombre producto"
          name="nameProduct"
          className="p-2 shadow-lg rounded-lg relative"
          {...register("nameProduct", {
            required: { value: true, message: "Ingrese el nombre del producto" },
            minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
            maxLength: { value: 50, message: "El nombre debe tener como máximo 50 caracteres" },
          })}
        />
        {errors.nameProduct && <span className="text-red-600 mt-1">{errors.nameProduct.message}</span>}
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="priceProduct">Precio producto</label>
        <input
          type="number"
          placeholder="Precio producto"
          name="priceProduct"
          className="p-2 shadow-lg rounded-lg relative"
          {...register("priceProduct", {
            required: { value: true, message: "Ingrese precio del producto" },
            type: { value: Number, message: "Este campo debe ser numérico" },
          })}
        />
        {errors.priceProduct && <span className="text-red-600 mt-1">{errors.priceProduct.message}</span>}
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="priceProduct">Descripción</label>
        <input
          type="text"
          placeholder="Descripción"
          name="Descripcion"
          className="p-2 shadow-lg rounded-lg relative"
          {...register("description", {
            required: { value: true, message: "La descripción es requerida" },
            minLength: { value: 10, message: "Debe contener al menos 10 caracteres" },
          })}
        />
        {errors.description && (
          <span className="text-red-600 mt-1">{errors.description.message}</span>
        )}
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="categoryId">Categoría</label>
        <select
          className="p-2 shadow-lg rounded-lg relative"
          {...register("categoryId", {
            required: true,
            type: Number,
          })}
        >
          {listCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button className="p-2 rounded-lg bg-green-400 text-white mt-6 mb-10 w-full">
        Registrar producto
      </button>
    </form>
  );
};

export default CreateProductComponent;
