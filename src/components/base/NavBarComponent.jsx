import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <nav className="bg-cyan-200 p-4 overflow-hidden w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-end">
        <NavLink to="/" className="text-blue-800 font-bold text-3xl hover:text-blue-300">
          Manualidades
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/dashboard"
              className="text-blue-800 hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos"
              className="text-blue-800 hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias"
              className="text-blue-800 hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Categorías
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/usuarios"
              className="text-blue-800 hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink to="/perfil" className="text-black-800 hover:text-blue-200 transition duration-300 ease-in-out">
              Perfil
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComponent;
