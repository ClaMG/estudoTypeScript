import logo from '../assets/img_logo.png'; 
import './css/header.css'

export default function Header(){
    return(
        <header className="main-header">
            <div className="header-container">
                <div className="logo-section">
                    <img src={logo} alt="Pet Connect Logo" className="logo-img" />
                    <span className="brand-name">PET CONNECT</span>
                </div>
            </div>
        </header>
    )
}