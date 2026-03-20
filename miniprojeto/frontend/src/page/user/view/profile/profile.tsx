import logo from '../../../../assets/img_logo_straight.png'
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import './profile.css'
import icUser from '../../../../assets/ic_user.png'
import icGetPet from '../../../../assets/ic_animal.png'
import icGetUser from '../../../../assets/ic_users.png'
import icEdit from '../../../../assets/ic_update.png'
import icDelete from '../../../../assets/ic_delete.png'
import icEmail from '../../../../assets/ic_email.png'
import icLogOut from '../../../../assets/ic_logout.png'
import { useProfile } from './profile.model';

export default function Profile(){
    const {goToGetAdmins, goToGetUsers, goToGetPets, goToUpdate, goToLogOut, userData, showFields, showAdmFields, deleteUser} = useProfile()

    return (
        <div className="app-wrapper-profile">
            <Header />
            
            <main className="container-profile">
                <section className="card-profile">
                    
                    <div className="logo-container-profile">
                        <img src={logo} alt="Pet Connect Logo" className="logo-img-profile" />
                    </div>

                    <div className="header-profile">
                        <h2 className="title-profile">Perfil</h2>
                        {showFields && (
                        <button className="admin-badge-profile" onClick={goToGetAdmins}>
                            <span className="badge-icon-profile"><img src={icUser} alt="icone do usuario" /></span> 
                            <span>Admin</span>
                        </button>)}
                    </div>

                    <div className="info-list-profile">
                        
                        <div className="info-row-profile">
                            <span className="info-icon-profile"><img src={icUser} alt="icone do usuario" /></span>
                            <span className="info-label-profile">Usuário:</span>
                            <span className="info-value-profile">{userData.user}</span>
                        </div>

                        <div className="info-row-profile">
                            <span className="info-icon-profile"><img src={icUser} alt="icone do usuario" /></span>
                            <span className="info-label-profile">Nome:</span>
                            <span className="info-value-profile">{userData.name}</span>
                        </div>

                        <div className="info-row-profile">
                            <span className="info-icon-profile"><img src={icEmail} alt="icone de email" /></span>
                            <span className="info-label-profile">E-mail:</span>
                            <span className="info-value-profile">{userData.email}</span>
                        </div>

                    </div>

                    <div className="actions-profile">
                        {showAdmFields && (<button className="action-circle-btn-profile" onClick={goToGetUsers}><img src={icGetUser} alt="botão de ver usuários" /></button>)}
                        <button className="action-circle-btn-profile" onClick={goToGetPets}><img src={icGetPet} alt="botão de ver pets" /></button>
                        <button className="action-circle-btn-profile" onClick={goToUpdate}><img src={icEdit} alt="botão de editar" /></button>
                        {showFields && (<button className="action-circle-btn-profile" onClick={deleteUser}><img src={icDelete} alt="botão de deletar" /></button>)}
                    </div>

                    <button className="btn-logout-profile" onClick={goToLogOut}>
                        <span className="logout-icon-profile"><img src={icLogOut} alt="icone de sair" /></span>
                        Sair da Conta
                    </button>

                </section>
            </main>

            <Footer />
        </div>
    )
}