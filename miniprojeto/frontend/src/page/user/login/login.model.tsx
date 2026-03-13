import { useNavigate } from "react-router-dom";
import type {LoginData} from '../../../../types'
import {userService} from '../../../service/services.ts'
import { toast } from 'sonner';
export function useLogin() {
    const navigate = useNavigate()
    async function goToCreate() {
        navigate('/cadastro')
    }

    async function goToForget() {
        navigate('/esquecer-senha')
    }

    async function logar(dados: LoginData) {
        try {
            const result = await userService.postLogin(dados)

             if(result.token != "" ){
                toast.success('Sucesso', {
                    description: result.message
                });
                //navigate('/getUser')
            }

        } catch (error) {
            let mensagem
            if (error instanceof Error) {
                mensagem = error.message; 
            } else {
                mensagem = `Erro desconhecido ${error}`
            }
            console.log("Mensagem do Back:", mensagem);
        }
        
    }

    return {goToCreate, goToForget, logar}
}