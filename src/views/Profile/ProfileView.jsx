import LayoutComponent from "../../components/Layout/LayoutComponent";

function ProfileView() {
  return (
    <LayoutComponent>
      <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Mi Perfil</h1>
        <div className="flex items-center mb-4">
          <img
            src="https://toppng.com/public/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png" // Reemplaza con la URL de la imagen de perfil
            alt="Perfil"
            className="rounded-full h-16 w-16 mr-4"
          />
          <div>
            <p className="text-xl font-semibold">john quimbaya</p>
            <p className="text-gray-600">Correo electrónico: quimbaya@example.com</p>
          </div>
        </div>
        {/* Otras secciones del perfil */}
      </div>
    </LayoutComponent>
  );
}

export default ProfileView;
