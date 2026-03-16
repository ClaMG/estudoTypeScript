import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './css/global.css';
import Home from './page/user/home/home';
import Login from './page/user/login/login';
import Create from './page/user/create/create';
import Profile from './page/user/view/profile/profile';
import { Toaster } from 'sonner';
function RoutesApp() {

 return (
  <>
    <Toaster 
        theme="light" // Base
        position="top-right"
        expand={false}
        richColors={false} // Desativamos as cores padrão 
        toastOptions={{
          //Css
          className: 'pet-connect-toast', 
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Create />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default RoutesApp
