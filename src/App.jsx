import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/base/NavBarComponent';
import FooterComponent from './components/base/FooterComponent';

const ProductsView = lazy(() => import('./views/Productos/ProductsView'));
const DetailProductView = lazy(() => import('./views/Productos/DetailProductView'));
const CategoriesView = lazy(() => import('./views/Categories/CategoriesView'));
const ProfileView = lazy(() => import('./views/Profile/ProfileView'));
const CreateProductView = lazy(() => import('./views/Productos/CreateProductView'));
const UsuariosComponent = lazy(() => import('./views/Usuarios/UsuariosComponent'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div />} />
      
      <Route path="/Productos" element={<ProductsView />} />
      <Route path="/Producto/:id" element={<DetailProductView />} />
      <Route path="/CreateProduct" element={<CreateProductView />} />
      <Route path="/Categorias" element={<CategoriesView />} />
      <Route path="/Usuarios" element={<UsuariosComponent/>} />
      <Route path="/Perfil" element={<ProfileView />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
