import { useNavigate } from "react-router-dom";
import type {LoginData} from '../../../../types'
import { toast } from 'sonner';
import { useState } from 'react';
import { loginHook } from "../../../hook/loginHook.tsx";
export function useLogin() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    async function goToCreate() {navigate('/cadastro')}
    
    async function goToForget() {navigate('/esquecer-senha')}

    async function logar(data: LoginData) {
       const login = await loginHook().logar(data)

       if(login?.result){
            toast.success('Sucesso', {
                description: login.mensage
            });
            navigate('/perfil')
       }else{
            toast.error('Erro',{
                 description: login?.mensage
             })
       }
        
    }

    //Olho
    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    return {
        goToCreate, goToForget, 
        logar, togglePasswordVisibility, 
        showPassword}
}