package com.example.android.data.remote.api

import com.example.android.data.remote.DTO.animal.AnimalByAllRequest
import com.example.android.data.remote.DTO.animal.AnimalByAllResponse
import com.example.android.data.remote.DTO.animal.AnimalCreateRequest
import com.example.android.data.remote.DTO.animal.AnimalCreateResponse
import com.example.android.data.remote.DTO.animal.AnimalDeleteRequest
import com.example.android.data.remote.DTO.animal.AnimalDeleteResponse
import com.example.android.data.remote.DTO.animal.AnimalUpdateRequest
import com.example.android.data.remote.DTO.animal.AnimalUpdateResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.HTTP
import retrofit2.http.Header
import retrofit2.http.POST
import retrofit2.http.PUT

//Usa as rotas
interface ApiAnimal {

    //Create
    @POST("animal/create")
    suspend fun registerAnimalApi(
        @Header("Authorization") token: String,
        @Body request: AnimalCreateRequest
    ): Response<AnimalCreateResponse>

    //By All
    @HTTP(method = "GET", path = "animal/animals", hasBody = true)
    suspend fun byAllAnimalApi(
        @Header("Authorization") token: String,
        @Body request: AnimalByAllRequest
    ): Response<AnimalByAllResponse>

    //Delete
    @HTTP(method = "DELETE", path = "animal/delete", hasBody = true)
    suspend fun deleteAnimalApi(
        @Header("Authorization") token: String,
        @Body request: AnimalDeleteRequest
    ): Response<AnimalDeleteResponse>

    //Update
    @PUT("animal/update")
    suspend fun updateAnimalApi(
        @Header("Authorization") token: String,
        @Body request: AnimalUpdateRequest
    ): Response<AnimalUpdateResponse>
}