import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/global.css';
import Home from './page/user/home/home';
import Login from './page/user/login/login';
import Create from './page/user/create/create';
import { Toaster } from 'sonner';
function RoutesApp() {

 return (
  <>
    <Toaster 
        theme="light" // Base escura como a logo
        position="top-right"
        expand={false}
        richColors={false} // Desativamos as cores padrão para usar as nossas
        toastOptions={{
          // Estilo base para todos os toasts
          style: { 
            background: 'var(--pet-bg)', // Fundo escuro da logo
            border: '2px solid var(--pet-border)', // Borda dourada da logo
            borderRadius: '16px', // Bordas arredondadas suaves
            color: '#fff',
            fontFamily: 'Inter, sans-serif', // Uma fonte limpa e moderna
            padding: '16px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)', // Sombra para destaque
          },
          // Classes personalizadas para sobrepor estilos com CSS
          className: 'pet-connect-toast', 
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Create />} />
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default RoutesApp
