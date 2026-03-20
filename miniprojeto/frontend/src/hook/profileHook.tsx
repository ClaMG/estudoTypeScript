import {userGets, userService} from '../service/services.ts'
import type {ProfileResponse} from '../../types.d.ts'

export const profileHook = () => {
        
    async function getInfo(): Promise<ProfileResponse> {
        try {
            const info = await userGets.getUser();
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
                user: "Informação não encontrada",
                name:"Informação não encontrada",
                email: "Informação não encontrada",
                password: "Informação não encontrada",
                admin: false 
            }
        }
    }

    async function deleteUser(user: string) {
        try {
            const delet = await userService.deleteUser({user});
            return{
                result: true,
                mensagem: delet.message
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

    return{getInfo, deleteUser}
    
}