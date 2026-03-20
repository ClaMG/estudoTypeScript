//import { authStorage } from '../../../utils/token/authStorage';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { updateHook } from "../../../hook/updateHook";
import {profileHook} from '../../../hook/profileHook.tsx'
import { toast } from 'sonner';
import type {UpdateData} from '../../../../types'

export function useUpdate(){
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [showFields, setShowFields] = useState(true);
    const [showAdmFields, setShowAdmFields] = useState(false);

    const [userData, setUserData] = useState({
        user: "",
        name: "",
        email: "",
        password: "",
        admin: false
    });

    async function goToBack() { navigate(-1)}

    async function updateUser(dadosPage: {user: string, name: string, email: string, password: string,
    admin: boolean}) {
        const id = 1
        const dadosEnd = { 
            id, 
            user: dadosPage.user, 
            name: dadosPage.name,
            email: dadosPage.email,
            password: dadosPage.password,
            admin: dadosPage.admin
        };    
        const data: UpdateData = dadosEnd
        const update = await updateHook().update(data)
        
               if(update?.result){
                    toast.success('Sucesso', {
                        description: update.mensagem
                    });
                    navigate('/perfil')
               }else{
                    toast.error('Erro',{
                         description: update?.mensagem
                     })
               }
     }

    useEffect(() => {
        async function fetchUpdateData() {
            const user = localStorage.getItem("user") || ''
            const dados = await updateHook().getInfo(user); 
            const dadosLogado = await profileHook().getInfo()
            if (dados && dados.result) {
                if (dados.admin) {
                    setShowFields(false);
                    setShowAdmFields(true);
                    if(dadosLogado.id == dados.id){
                        setShowFields(true);
                    }
                }
                
                setUserData({
                    user: dados.user,
                    name: dados.name,
                    email: dados.email,
                    password: dados.password,
                    admin: dados.admin
                });
            } else {
                toast.error('Erro ao carregar perfil', {
                    description: dados?.mensage || "Erro desconhecido" 
                });
            }
        }

        fetchUpdateData();
    }, []);

    //Olho
    const togglePasswordVisibility = () => setShowPassword(prev => !prev);
    const togglePasswordRepeatVisibility = () => setShowPasswordRepeat(prev => !prev);

    return{
        showPassword,showPasswordRepeat,
        togglePasswordVisibility, togglePasswordRepeatVisibility,
        goToBack, userData,
        showFields, showAdmFields,
        updateUser
    }
}