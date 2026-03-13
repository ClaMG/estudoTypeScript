import Header from "../../../components/header"
import Footer from "../../../components/footer"
import logo from '../../../assets/img_logo.png'
import './home.css'
import { useHome } from './home.model'; 

export default function Home(){
    const {goToCreate, goToLogin} = useHome()
    return (
        <div className="app-wrapper-home">
            <Header />
            
            <main className="container-home">
                <section className="hero-section-home">
                    <img src={logo} alt="Pet Connect Logo" className="logo-home" />
                    
                    <h1 className="welcome-text-home">Bem-vindo ao Pet Connect</h1>
                    
                    <div className="button-group-home">
                        <button className="btn-primary-home" onClick={goToLogin}>Entrar</button>
                        <button className="btn-secondary-home" onClick={goToCreate} >Cadastrar-se</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}