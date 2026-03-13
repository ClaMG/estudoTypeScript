import * as yup from 'yup';
import { Formik, Field, Form } from "formik";
import logo from '../../../assets/img_logo_straight.png'
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import './login.css'
import icUser from '../../../assets/ic_user.png'
import icPassword from '../../../assets/ic_password.png'
import icEye from '../../../assets/ic_eye_close.png'
import { useLogin } from './login.model';

export default function Login(){
    const {goToCreate, goToForget, logar} = useLogin()
    
    const schema = yup.object({
        user: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
    });
    
    return (
        <div className="app-wrapper-login">
            <Header/>
            <main className="container-login">
                <section className="card-login">
                    <h2 className="title-login">Logar</h2>  

                    <img src={logo} alt="Pet Connect Logo" className="logo-img-login" />  
                     
                    <Formik
                        initialValues={{ user: '', password: '' }}
                        validationSchema={schema}
                        onSubmit={(values) => logar(values)}
                    >
                        {({ isSubmitting }) => ( 
                        <Form className="form-login">
                            <div className="input-group-login">
                                <span className="icon-login"><img src={icUser} alt="icone de usuário" /></span>
                                <Field 
                                    name="user" 
                                    type="text" 
                                    placeholder="Digite um nome de usuário" 
                                    className="input-field-login"
                                />
                            </div>

                            <div className="input-group-login">
                                <span className="icon-login"><img src={icPassword} alt="icone de senha" /></span>
                                <Field 
                                    name="password" 
                                    type="password" 
                                    placeholder="Digite uma senha" 
                                    className="input-field-login"
                                />
                                <span className="icon-login"><img src={icEye} alt="icone de olho" /></span>
                            </div>

                            <div className="forgot-password-login">
                                Esqueceu a senha? <strong onClick={goToForget}>Recuperar</strong>
                            </div>

                            <button type="submit" className="btn-submit-login" disabled={isSubmitting}>
                                 {isSubmitting ? "Carregando..." : "Entrar"}
                            </button>
                        </Form>
                    )}
                    </Formik>

                    <div className="footer-links-login">
                        Não tem uma conta? <span className="highlight-login" onClick={goToCreate}>Cadastrar-se</span>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )

}