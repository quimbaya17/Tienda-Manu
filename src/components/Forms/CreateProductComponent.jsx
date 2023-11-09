import React, { useState, useEffect } from "react";
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
    console.log(data);
    data.images = ["https://placeimg.com/640/480/any"];

    // fetchPost("https://api.escuelajs.co/api/v1/auth/login", data).then(
    //   (response) => {
    //     console.log(response);
    //   }
    // );

  });

  useEffect(() => {
    fetchGet("https://api.escuelajs.co/api/v1/categories").then((response) => {
      setListCategories(response);
    });
  }, []);

  return (
    <form onSubmit={onHandleSubmit} className="w-1/4">
      <div className="flex flex-col mt-4">
        <label className="col-lg" htmlFor="nameProduct">
          Nombre producto
        </label>

        <input
          type="text"
          placeholder="Nombre producto "
          name="nameProduct"
          className="p-2 shadow-lg rounded-lg relative"
          {...register("title", {
            required: { value: true, message: "Ingres el nombre del producto" },
            minLength: {
              value: 3,
              message: "El nombre debe contener minimo 3 caracteres",
            },
            maxLength: {
              value: 10,
              message: "El nombre debe contener maximo 10 caracteres",
            },
          })}
        />
        {errors.title && (
          <span className="text-red-600 mt-1">{errors.title.message}</span>
        )}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="priceProduct">Precio producto</label>
        <input
          type="number"
          placeholder="Precio producto"
          name="priceProduct"
          className="p-2 shadow-lg rounded-lg relative"
          {...register("price", {
            required: { value: true, message: "Ingrese precio del producto" },
            type: { value: Number, message: "Este campo debe ser numerico" },
          })}
        />
        {errors.price && (
          <span className="text-red-600 mt-1">{errors.price.message}</span>
        )}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="priceProduct">Descripción</label>
        <input
          type="text"
          placeholder="Descripción"
          name="Descripcion"
          className="p-2 shadow-lg rounded-lg relative"
          {...register("description", {
            required: { value: true, message: "La descripcion es requrida" },
            minLength: {
              value: 10,
              message: "Debe contener minimo 11 caracteres",
            },
          })}
        />
        {errors.description && (
          <span className="text-red-600 mt-1">
            {errors.description.message}{" "}
          </span>
        )}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="priceProduct">Categoria</label>

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
