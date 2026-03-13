import { authStorage } from '../../../utils/token/authStorage';
import { useNavigate } from "react-router-dom";
import type {CreateData} from '../../../../types'
import {userCreate} from '../../../service/services.ts'

export function useCreate(){
    const navigate = useNavigate()

    const token = authStorage.getToken()
    let showFields = true
    let showAdmFields = false
    if(token != null){
        showFields = false
        showAdmFields = true
    }

    async function goToLogin() {
        navigate('/login')
    }

    async function cadastrar(data:CreateData) {
        try {
            let result 
            if(token != null){
                result = await userCreate.postAdminCreate(data)
            }else{
               result = await userCreate.postCreate(data)
            }

            if(result.data){
                console.log(result.message)
                //navigate('/home')
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
    
  
    return{cadastrar, goToLogin, showFields, showAdmFields}
}