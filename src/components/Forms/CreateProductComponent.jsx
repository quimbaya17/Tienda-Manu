import React from "react";

const CreateProductComponent = () => {
  return (
    <form action="" method="POST" className="">
      <label htmlFor="nameProduct">Nombre producto</label>
      <input type="text" placeholder="Nombre producto" name="nameProduct" />

      <label htmlFor="priceProduct">Precio producto</label>
      <input type="text" placeholder="Nombre producto" name="priceProduct" />
    </form>
  );
};

export default CreateProductComponent;
