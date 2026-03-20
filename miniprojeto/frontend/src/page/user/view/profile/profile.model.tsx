import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import {profileHook} from '../../../../hook/profileHook.tsx'
import { toast } from "sonner";
import { authStorage } from '../../../../utils/token/authStorage.ts';

export function useProfile() {
    const navigate = useNavigate()
    const [showFields, setShowFields] = useState(true);
    const [showAdmFields, setShowAdmFields] = useState(false);
    const [user, setUser] = useState("");
    

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

    async function deleteUser() {
        const delet = await profileHook().deleteUser(user)
        if(delet.result){
            toast.success('Sucesso',{
                description: delet.mensagem
            })
            goToLogOut()
        }else{
            toast.error('Erro', {
                description: delet.mensagem
            });
        }
    }

    useEffect(() => {
        async function fetchProfileData() {
            const dados = await profileHook().getInfo(); 
            setUser(dados.user)
            localStorage.setItem("user", dados.user)
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
                toast.error('Erro ao carregar perfil', {
                    description: dados?.mensage || "Erro desconhecido" 
                });
            }
        }

        fetchProfileData();
    }, []);
    
    return{
        goToGetAdmins, goToGetUsers, 
        goToGetPets, goToUpdate, 
        goToLogOut, userData,
        showFields, showAdmFields,
        deleteUser
    }
}