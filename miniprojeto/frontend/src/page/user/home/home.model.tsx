import { useNavigate } from "react-router-dom";

export function useHome(){
    const navigate = useNavigate();

    async function goToLogin() {
        navigate('/login')
    }

    async function goToCreate() {
         navigate('/cadastro')
    }

    return {goToLogin, goToCreate}
}