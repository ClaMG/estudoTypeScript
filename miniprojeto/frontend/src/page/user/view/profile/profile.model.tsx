import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import {profileHook} from '../../../../hook/profileHook.tsx'
import { toast } from "sonner";
import { authStorage } from '../../../../utils/token/authStorage.ts';

export function useProfile() {
    const navigate = useNavigate()
    const { getInfo } = profileHook();
    const [showFields, setShowFields] = useState(true);
    const [showAdmFields, setShowAdmFields] = useState(false);

    const [userData, setUserData] = useState({
        user: "Carregando...",
        name: "Carregando...",
        email: "Carregando...",
        password: "Carregando...",
        admin: false
    });

    async function goToGetAdmins() {navigate('/admins')}
    async function goToGetUsers() {navigate('/usuarios')}
    async function goToGetPets() {navigate('/pets')}
    async function goToUpdate() {navigate('/atualizar')}
    async function goToLogOut() {
        authStorage.removeToken()
        navigate('/home') 
    }


    useEffect(() => {
    async function fetchProfileData() {
        const dados = await getInfo(); 

        // Só atualiza os estados se a busca deu certo
        if (dados && dados.result) {
            if (dados.admin) {
                setShowFields(false);
                setShowAdmFields(true);
            }
            
            setUserData({
                user: dados.user,
                name: dados.name,
                email: dados.email,
                password: dados.password,
                admin: dados.admin
            });
        } else {
            // Se deu erro, avisa o usuário
            toast.error('Erro ao carregar perfil', {
                description: dados?.mensage || "Erro desconhecido" // Ajustado para 'message'
            });
        }
    }

    fetchProfileData();
}, []);
    
    return{
        goToGetAdmins, goToGetUsers, 
        goToGetPets, goToUpdate, 
        goToLogOut, userData,
        showFields, showAdmFields
    }
}