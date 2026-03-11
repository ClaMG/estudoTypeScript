import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './page/user/home/home';

function RoutesApp() {

 return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default RoutesApp
