import api from '../api/configApi'
import type {LoginResponse, MessageResponse, UserResponse, LoginData, CreateData, UserData, UpdateData, SendCodeData} from '../../types'
import { authStorage } from '../utils/token/authStorage';

export const userService ={
    postLogin: async (dadosLogin: LoginData) =>{
        const response = await api.post<LoginResponse>('user/login', dadosLogin)
        if (response.data.token) authStorage.saveToken(response.data.token)
        return response.data
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

    getUser: async (dadosById: UserData)=>{
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
    putUpdatePassword:async (dadosUpdadePassword: object)=>{
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