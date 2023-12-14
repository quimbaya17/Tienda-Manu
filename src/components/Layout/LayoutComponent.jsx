
// Creamos una plantilla por defecto para poder recorrer nuestras
// vistas o paginas sobre un mismo layout o diseño, (Opcional)

const LayoutComponent = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-white rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default LayoutComponent;

