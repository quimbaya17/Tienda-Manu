import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bottom-0 fixed w-full flex justify-center items-center mt-12 px-1 bg-cyan-200">
      <div className="container mx-auto grid grid-cols-1  text-center">

        {/* Redes Sociales */}
        <div className="flex justify-center items-center mt-2 space-x-4">
          <a href="https://www.facebook.com/?locale=es_LA" className="text-blue" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/accounts/login/" className="text-blue" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl" />
          </a>
        </div>

        {/* Información del pie de página */}
        <div className="py-1 mt-2 text-sm"> 
          <p className="text-black">
            &copy; <span>Copyright</span> <strong className="px-1">Manualidades Quimbaya</strong> <span>Todos los derechos reservados</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
