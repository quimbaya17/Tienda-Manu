//Archivo raiz del proyecto, punto de partida de nuestra aplicación
// IMPORTAMOS LAS FUNCIONES NECESARIAS PARA PODER EMPAQUETAR NUESTRAS RUTAS
// Y PODER REALIZAR LAS DIFERENTES NAVEGACION
import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import NavBarComponent from "./components/base/NavBarComponent";
import FooterComponent from "./components/base/FooterComponent";

//Importamos las vistas o paginas que deseamos retornar para cada una de las rutas creadas
import ProductsView from "./views/Productos/ProductsView";
import CategoriesView from "./views/Categories/CategoriesView";
import ProfileView from "./views/Profile/ProfileView";
import CreateProductView from "./views/Productos/CreateProductView";
//CREAMOS LAS RUTAS EN UNA FUNCION QUE NOS RETORNA CADA UNA DE LAS RUTAS QUE QUEREMOS
//DEFINIR PARA NUESTRO PROYECTO

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: "" },
    { path: "/Productos", element: <ProductsView /> },
    { path: "/CreateProduct", element: <CreateProductView /> },
    { path: "/Categorias", element: <CategoriesView /> },
    { path: "/Usuarios", element: "" },
    { path: "/Perfil", element: <ProfileView /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <AppRoutes />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
