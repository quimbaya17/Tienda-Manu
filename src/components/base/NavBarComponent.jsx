import React from "react";
import { NavLink } from "react-router-dom";
//Para poder usar rutas en react instalamos la libreria react-router.dom
//Con el siguiente comando de npm (npm i react-router-dom)
//Usamo la funcion NavLink para poder navegar entre las diferentes paginas de nuestra app

const NavBarComponent = () => {
  return (
    <nav className="bg-blue-100 p-4 overflow-hidden w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-end">
        <NavLink to="/" className="text-blue-800 font-bold text-2xl">
          Vite + React
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/dashboard"
              className="text-blue-800 hover:text-blue-600"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos"
              className="text-blue-800 hover:text-blue-600"
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias"
              className="text-blue-800 hover:text-blue-600"
            >
              Categorías
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/usuarios"
              className="text-blue-800 hover:text-blue-600"
            >
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink to="/perfil" className="text-blue-800 hover:text-blue-600">
              Perfil
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComponent;
