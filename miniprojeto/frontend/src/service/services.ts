import api from '../api/configApi'
import type { MessageResponse, UserResponse, LoginData, CreateData, UserData, UpdateData, SendCodeData, UpdadePasswordData} from '../../types'
import { authStorage } from '../utils/token/authStorage';

export const userService ={
    postLogin: async (dados: LoginData) => {
        const response = await api.post('user/login', dados);
        const token = response.data?.token || response.data?.accessToken || response.data?.data?.token;

        if (token) {
            authStorage.saveToken(token);
        } 
        
        return response.data;
    },

    deleteUser: async (dadosDelete: UserData)=>{
        const response = await api.delete<MessageResponse>('user/delete', {data: dadosDelete })
        return response.data
    },

    putUpdate:async (dadosUpdade: UpdateData)=>{
        const response = await api.put<MessageResponse>('user/update', dadosUpdade)
        return response.data
    }
}

export const userGets ={
    getAllUsers: async ()=>{
        const response = await api.get<UserResponse[]>('user/users')
        return response.data
    },

    getUser: async (dadosById?: UserData)=>{
        const response = await api.get<UserResponse>('user/user',  {params: dadosById })
        return response.data
    },
}

export const userCreate ={
    postCreate: async (dadosCreate: CreateData) =>{
        const response = await api.post<MessageResponse>('user/create', dadosCreate)
        return response.data
    },

    postAdminCreate: async (dadosCreate: CreateData) =>{
        const response = await api.post<MessageResponse>('user/create-admin', dadosCreate)
        return response.data
    },
}

export const userAdmin ={
    getAdmin: async ()=>{
        const response = await api.get<UserResponse[]>('user/view-admins')
        return response.data
    },

    postAdmin:async (dadosAdmin: UserData) =>{
        const response = await api.post<MessageResponse>('user/send-admin', dadosAdmin)
        return response.data
    }
}

export const userForgetPassword ={
    putUpdatePassword: async (dadosUpdadePassword: UpdadePasswordData)=>{
        const response = await api.put<MessageResponse>('user/update-password', dadosUpdadePassword)
        return response.data
    },

    postSendCode:async (dadosSenCode: SendCodeData) =>{
        const response = await api.post<MessageResponse>('user/send-code', dadosSenCode)
        return response.data
    }
}

export const animalServices ={
   
}