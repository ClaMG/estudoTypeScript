import { authStorage } from '../utils/token/authStorage';
import type {CreateData} from '../../types'
import {userCreate} from '../service/services.ts'

export const createHook = () => {

    async function register(data:CreateData) {
        try {
            const token = authStorage.getToken()
            let result 
            if(token != null){
                result = await userCreate.postAdminCreate(data)
            }else{
                result = await userCreate.postCreate(data)
            }

            if(result.data){
                return {
                    result: true,
                    mensage: result.message
                }
            }
            
        } catch (error) {
            let mensagem
            if (error instanceof Error) {
                mensagem = error.message; 
            } else {
                mensagem = `Erro desconhecido ${error}`
            }
            console.log("Mensagem do Back:", mensagem);
            return {
                result: false,
                mensage: mensagem
            }
        }
    }

        return{register}
}