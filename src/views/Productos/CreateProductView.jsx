import React from "react";
import CreateProductComponent from "../../components/Forms/CreateProductComponent";
import LayoutComponent from "../../components/Layout/LayoutComponent";
function CreateProductView() {
  return (
    <LayoutComponent>
      Formulario para crear nuevo producto
      <CreateProductComponent />
    </LayoutComponent>
  );
}

export default CreateProductView;
