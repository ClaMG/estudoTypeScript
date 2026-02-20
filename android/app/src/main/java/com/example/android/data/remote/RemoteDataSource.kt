package com.example.android.data.remote

import com.example.android.data.remote.DTO.user.UserCreateRequest
import com.example.android.data.remote.DTO.user.UserCreateResponse
import com.example.android.data.remote.DTO.user.UserLoginRequest
import com.example.android.data.remote.DTO.user.UserLoginResponse
import com.example.android.data.remote.api.ApiUserInterface
import com.example.android.data.remote.erro.ErrorClass

class RemoteDataSource(private val api: ApiUserInterface) {

    //formato token
    private fun formatToken(token: String) = "Bearer $token"

    // Create
    suspend fun registerUser(request: UserCreateRequest) : UserCreateResponse {
        val response = api.registerUserApi(request) //faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }

    // Login
    suspend fun loginUser(request: UserLoginRequest) : UserLoginResponse {
        val response = api.loginUserApi(request)//faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }
    
}