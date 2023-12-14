import LayoutComponent from "../../components/Layout/LayoutComponent";

function CategoriesView() {
  const categories = [
    { id: 1, name: "Categoría Deporte" },
    { id: 2, name: "Categoría Articulos" },
    { id: 3, name: "Categoría Moda" },
    // Agrega más categorías según sea necesario
  ];

  return (
    <LayoutComponent>
      <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Listado de Categorías</h1>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className="bg-gray-100 p-4 mb-4 rounded-md hover:bg-gray-200 transition duration-300"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </LayoutComponent>
  );
}

export default CategoriesView;
