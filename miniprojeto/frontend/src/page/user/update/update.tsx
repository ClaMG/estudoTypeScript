import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import logo from '../../../assets/img_logo_straight.png';
import icUser from '../../../assets/ic_user.png';
import icEmail from '../../../assets/ic_email.png'
import icPassword from '../../../assets/ic_password.png';
import icUserAdmin from '../../../assets/ic_admin.png';
import icEyeClose from '../../../assets/ic_eye_close.png'
import icEyeOpen from '../../../assets/ic_eye_open.png'
import { ArrowBigLeft } from 'lucide-react'; 
import { useUpdate } from './update.model';
import './update.css'

export default function Update() {
    const {showPassword,showPasswordRepeat, togglePasswordVisibility, togglePasswordRepeatVisibility, goToBack, userData, showFields, showAdmFields, updateUser} = useUpdate()

    const schema = yup.object({
            user: yup.string().required("O Nome de usuário é obrigatório"),
            name: yup.string().required("O Nome completo é obrigatório"),
            email: yup.string().email("O E-mail inválido").required("Email é obrigatório"),
            password: showFields ? yup.string().required("A Senha é obrigatória") : yup.string(),
            confirmPassword: showFields ? yup.string().oneOf([yup.ref('password'), ''], 'As senhas devem ser iguais').required("A Confirmação de senha é obrigatória"): yup.string(),
            admin: yup.boolean()
        });

    return (
        <div className="app-wrapper-update">
            <Header />

            <main className="container-update">
                <div className="card-update">
                    
                    <div className="logo-container-update">
                        <button 
                            type="button" 
                            className="btn-back-update" 
                            title="Voltar"
                            onClick={goToBack}
                        >
                            <ArrowBigLeft size={28} />
                        </button>
                        <img src={logo} alt="Logo" className="logo-img-update" />
                    </div>

                    <h1 className="title-update">Atualizar Perfil</h1>

                    <Formik
                        initialValues={{ user: userData?.user || '', name: userData?.name || '', email: userData?.email || '', password: '', confirmPassword: '', admin: userData?.admin || false }}
                        enableReinitialize={true}
                        validationSchema={schema}
                        onSubmit={(values) => updateUser(values)}
                    >
                        {({ isSubmitting }) => (
                            <Form className="form-update">
                                {/* Campo Usuário */}
                                <div className="input-group-update">
                                    <span className="icon-update"><img src={icUser} alt="user" /></span>
                                    <Field 
                                    name='user' 
                                    type='text' 
                                    placeholder='Digite o nome de usuário' 
                                    className="input-field-update" />
                                </div>
                                <ErrorMessage name="user" component="span" className="error-message" />


                                {/* Campo Nome Completo */}
                                <div className="input-group-update">
                                    <span className="icon-update"><img src={icUser} alt="name" /></span>
                                    <Field 
                                    name='name' 
                                    type='text' 
                                    placeholder='Digite seu nome completo' 
                                    className="input-field-update" />
                                </div>
                                <ErrorMessage name="name" component="span" className="error-message" />

                                {/* Campo Email */}
                                <div className="input-group-update">
                                    <span className="icon-update"><img src={icEmail} alt="email" /></span>
                                    <Field 
                                    name='email' 
                                    type='email' 
                                    placeholder='Digite seu e-mail' 
                                    className="input-field-update" />
                                </div>
                                <ErrorMessage name="email" component="span" className="error-message" />


                                {showFields && (
                                    <>
                                    <div className="input-group-update">
                                        <span className="icon-update"><img src={icPassword} alt="password" /></span>
                                        <Field 
                                        name='password' 
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Digite sua senha' 
                                        className="input-field-update" />
                                        <button type='button' className="icon-login" onClick={togglePasswordVisibility}>{showPassword ? <img src={icEyeOpen} alt="icone de olho" /> : <img src={icEyeClose} alt="icone de olho" />}</button>
                                    </div>
                                    <ErrorMessage name="password" component="span" className="error-message" />
    
                                    <div className="input-group-update">
                                        <span className="icon-update"><img src={icPassword} alt="confirm" /></span>
                                        <Field 
                                        name='confirmPassword' 
                                        type={showPasswordRepeat ? 'text' : 'password'}
                                        placeholder='Confirme sua senha' 
                                        className="input-field-update" />
                                        <button type='button' className="icon-login" onClick={togglePasswordRepeatVisibility}>{showPasswordRepeat ? <img src={icEyeOpen} alt="icone de olho" /> : <img src={icEyeClose} alt="icone de olho" />}</button>
                                    </div>
                                    <ErrorMessage name="confirmPassword" component="span" className="error-message" />    
                                    </>
                                )}

                                {showAdmFields && (
                                    <div className="switch-container-update">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span className="icon-update"><img src={icUserAdmin} alt="admin" /></span>
                                            <span>Administrador?</span>
                                        </div>
                                        <label className="switch-update">
                                            <Field type="checkbox" name="admin" />
                                            <span className="slider-update"></span>
                                        </label>
                                    </div>
                                )}

                                <button type="submit" className="btn-submit-update" disabled={isSubmitting}>
                                    {isSubmitting ? "Carregando..." : "Atualizar"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </main>

            <Footer />
        </div>
    )
}