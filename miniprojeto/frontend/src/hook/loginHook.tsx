import type {LoginData} from '../../types.d.ts'
import {userService} from '../service/services.ts'

export const loginHook = () => {
        
    async function logar(dados: LoginData) {
        try {
            const result = await userService.postLogin(dados)

             if(result.token != "" ){
                return {
                    result: true,
                    mensage: result.message,
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

    return{logar}
    
}