import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import logo from '../../../assets/img_logo_straight.png';
import icUser from '../../../assets/ic_user.png';
import icEmail from '../../../assets/ic_email.png'
import icPassword from '../../../assets/ic_password.png';
import icUserAdmin from '../../../assets/ic_admin.png';
import './create.css'; 
import { useCreate } from './create.model';

export default function Create() {

    const {cadastrar, goToLogin, showAdmFields,showFields} = useCreate()
    
    const schema = yup.object({
        user: yup.string().required("O Nome de usuário é obrigatório"),
        name: yup.string().required("O Nome completo é obrigatório"),
        email: yup.string().email("O E-mail inválido").required("Email é obrigatório"),
        password: showFields ? yup.string().required("A Senha é obrigatória") : yup.string(),
        confirmPassword: showFields ? yup.string().oneOf([yup.ref('password'), ''], 'As senhas devem ser iguais').required("A Confirmação de senha é obrigatória"): yup.string(),
        admin: yup.boolean()
    });

    return (
        <div className="app-wrapper-register">
            <Header />

            <main className="container-register">
                <section className="card-register">
                    <h2 className="title-register">Cadastrar</h2>

                    <div className="logo-container-register">
                        <img src={logo} alt="Pet Connect Logo" className="logo-img-register" />
                    </div>

                    <Formik
                        initialValues={{ user: '', name: '', email: '', password: '', confirmPassword: '', admin: false }}
                        validationSchema={schema}
                        onSubmit={(values) => cadastrar(values)}
                    >
                        {({ isSubmitting }) => (
                            <Form className="form-register">
                                
                                {/* Campo Usuário */}
                                <div className="input-group-register">
                                    <span className="icon-register"><img src={icUser} alt="user" /></span>
                                    <Field name='user' type='text' placeholder='Digite o nome de usuário' className="input-field-register" />
                                </div>
                                <ErrorMessage name="user" component="span" className="error-message" />

                                {/* Campo Nome Completo */}
                                <div className="input-group-register">
                                    <span className="icon-register"><img src={icUser} alt="name" /></span>
                                    <Field name='name' type='text' placeholder='Digite seu nome completo' className="input-field-register" />
                                </div>
                                <ErrorMessage name="name" component="span" className="error-message" />

                                {/* Campo Email */}
                                <div className="input-group-register">
                                    <span className="icon-register"><img src={icEmail} alt="email" /></span>
                                    <Field name='email' type='email' placeholder='Digite seu e-mail' className="input-field-register" />
                                </div>
                                <ErrorMessage name="email" component="span" className="error-message" />

                                {/* Campo Senha */}
                                {showFields && (
                                    <>
                                    <div className="input-group-register">
                                        <span className="icon-register"><img src={icPassword} alt="password" /></span>
                                        <Field name='password' type='password' placeholder='Digite sua senha' className="input-field-register" />
                                    </div>
                                    <ErrorMessage name="password" component="span" className="error-message" />
    
                                    <div className="input-group-register">
                                        <span className="icon-register"><img src={icPassword} alt="confirm" /></span>
                                        <Field name='confirmPassword' type='password' placeholder='Confirme sua senha' className="input-field-register" />
                                    </div>
                                    <ErrorMessage name="confirmPassword" component="span" className="error-message" />    
                                    </>
                                )}

                                {/* Switch Admin */}
                                {showAdmFields && (
                                    <div className="switch-container">
                                        <span className="icon-register"><img src={icUserAdmin} alt="user admin" /></span>
                                        <span>Administrador?</span>
                                        <label className="switch">
                                            <Field type="checkbox" name="admin" />
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                )}

                                <button type="submit" className="btn-submit-register" disabled={isSubmitting}>
                                    {isSubmitting ? "Carregando..." : "Cadastrar"}
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <div className="footer-links-register">
                        Já tem uma conta? <span className="highlight-register" onClick={goToLogin}>Logar</span>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}