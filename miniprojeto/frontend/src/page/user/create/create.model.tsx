import { authStorage } from '../../../utils/token/authStorage';
import { useNavigate } from "react-router-dom";
import type {CreateData} from '../../../../types'
import { useState } from 'react';
import { createHook } from '../../../hook/createHook.tsx';
import { toast } from 'sonner';

export function useCreate(){
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    
    const token = authStorage.getToken()
    let showFields = true
    let showAdmFields = false
    if(token != null){
        showFields = false
        showAdmFields = true
    }

    async function goToLogin() { navigate('/login')}

    async function cadastrar(data:CreateData) {
        const create = await createHook().register(data)

       if(create?.result){
            toast.success('Sucesso', {
                description: create.mensage
            });
            navigate('/login')
       }else{
            toast.error('Erro',{
                 description: create?.mensage
             })
       }
    }

    //Olho
    const togglePasswordVisibility = () => setShowPassword(prev => !prev);
    const togglePasswordRepeatVisibility = () => setShowPasswordRepeat(prev => !prev);
  
    return{
        cadastrar, goToLogin, 
        showFields, showAdmFields, 
        togglePasswordVisibility, togglePasswordRepeatVisibility, 
        showPassword, showPasswordRepeat}
}