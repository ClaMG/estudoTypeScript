package com.example.android.data.remote

import com.example.android.data.remote.DTO.animal.AnimalByAllRequest
import com.example.android.data.remote.DTO.animal.AnimalByAllResponse
import com.example.android.data.remote.DTO.animal.AnimalCreateRequest
import com.example.android.data.remote.DTO.animal.AnimalCreateResponse
import com.example.android.data.remote.DTO.animal.AnimalDeleteRequest
import com.example.android.data.remote.DTO.animal.AnimalDeleteResponse
import com.example.android.data.remote.DTO.animal.AnimalUpdateRequest
import com.example.android.data.remote.DTO.animal.AnimalUpdateResponse
import com.example.android.data.remote.api.ApiAnimal
import com.example.android.data.remote.erro.ErrorClass

class RemoteAnimalDataSource (private val api: ApiAnimal) {

    //formato token
    private fun formatToken(token: String) = "Bearer $token"

    //Create
    suspend fun createAnimalDataSource(token: String, request: AnimalCreateRequest) : AnimalCreateResponse {
        val response = api.registerAnimalApi(formatToken(token), request) //faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }
    //By All
    suspend fun byAllAnimalDataSource(token: String, request: AnimalByAllRequest) : AnimalByAllResponse {
        val response = api.byAllAnimalApi(formatToken(token), request) //faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }
    //Delete
    suspend fun deleteAnimalDataSource(token: String, request: AnimalDeleteRequest) : AnimalDeleteResponse  {
        val response = api.deleteAnimalApi(formatToken(token), request) //faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }
    //Update
    suspend fun updateAnimalDataSource(token: String, request: AnimalUpdateRequest ) : AnimalUpdateResponse  {
        val response = api.updateAnimalApi(formatToken(token), request) //faz a parte logica com a api (mandar e receber)

        if (response.isSuccessful){//Verificação e resposta
            return response.body() ?: throw Exception("Resposta vazia")

        }else{
            val errorMsg = ErrorClass().parseError(response)
            throw Exception(errorMsg)
        }
    }
}