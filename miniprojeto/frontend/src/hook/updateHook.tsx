import {userGets} from '../service/services.ts'
import type {ProfileResponse, UpdateData} from '../../types.d.ts'
import {userService} from '../service/services.ts'

export const updateHook =()=>{
    async function getInfo(user: string): Promise<ProfileResponse> {
            try {
                const info = await userGets.getUser({user});
                return{
                    result: true,
                    id: info.id,
                    user: info.user,
                    name:info.name,
                    email: info.email,
                    password: info.password,
                    admin: info.admin
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
                    mensage: mensagem,
                    user: "",
                    name:"",
                    email: "",
                    password: "",
                    admin: false 
                }
            }
        }

    async function update(data:UpdateData) {
        try {
            const result = await userService.putUpdate(data)
            return{
                result: true,
                mensagem: result.message
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
                mensagem: mensagem
            }
        }
    }

        return{getInfo, update}
}