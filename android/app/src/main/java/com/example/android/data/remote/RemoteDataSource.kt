package com.example.android.data.remote

import com.example.android.data.remote.DTO.user.UserByAllResponse
import com.example.android.data.remote.DTO.user.UserByIdRequest
import com.example.android.data.remote.DTO.user.UserByIdResponse
import com.example.android.data.remote.DTO.user.UserCreateRequest
import com.example.android.data.remote.DTO.user.UserCreateResponse
import com.example.android.data.remote.DTO.user.UserDeleteRequest
import com.example.android.data.remote.DTO.user.UserDeleteResponse
import com.example.android.data.remote.DTO.user.UserLoginRequest
import com.example.android.data.remote.DTO.user.UserLoginResponse
import com.example.android.data.remote.DTO.user.UserUpdateRequest
import com.example.android.data.remote.DTO.user.UserUpdateResponse
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

    //Get All
    suspend fun byAllUser(token: String) : List<UserByAllResponse> {
        val response = api.byAllUserApi(formatToken(token))//faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: emptyList()

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }

    //Delete
    suspend fun deleteUser(token: String, request: UserDeleteRequest) : UserDeleteResponse {
        val response = api.deleteUserApi(formatToken(token), request)//faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }

    //Update
    suspend fun updateUser(token: String, request: UserUpdateRequest) : UserUpdateResponse {
        val response = api.updateUserApi(formatToken(token), request)//faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }
    
    //Get By id
    suspend fun byIdUser(token: String, request: UserByIdRequest) : UserByIdResponse {
        val response = api.byIdUserApi(formatToken(token), request)//faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }
}
