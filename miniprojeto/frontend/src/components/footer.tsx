import packageJson from '../../package.json';
import './css/footer.css'
export default function Footer(){
    const version = packageJson.version

    return(
        <footer className="main-footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Pet Connect - Todos os direitos reservados</p>
                <span className="version-tag">Versão {version}</span>
            </div>
        </footer>
    )
}