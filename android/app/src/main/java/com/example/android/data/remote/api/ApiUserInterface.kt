package com.example.android.data.remote.api

import com.example.android.data.remote.DTO.UserCreateRequest
import com.example.android.data.remote.DTO.UserCreateResponse
import com.example.android.data.remote.DTO.UserDeleteRequest
import com.example.android.data.remote.DTO.UserDeleteResponse
import com.example.android.data.remote.DTO.UserLoginRequest
import com.example.android.data.remote.DTO.UserLoginResponse
import com.example.android.data.remote.DTO.UserUpdateRequest
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.DELETE
import retrofit2.http.Header
import retrofit2.http.POST
import retrofit2.http.PUT

interface ApiUserInterface {
    //Create
    @POST("user/create")
    suspend fun registerUser(
        @Body request: UserCreateRequest
    ): Response<UserCreateResponse>

    //Delete
    @DELETE("user/delete")
    suspend fun deleteUser(
        @Header("Authorization") token: String,
        @Body request: UserDeleteRequest
    ): Response<UserDeleteResponse>

    //Login
    @POST("user/login")
    suspend fun loginUser(
        @Body request: UserLoginRequest
    ): Response<UserLoginResponse>

    //Update
    @PUT("user/update")
    suspend fun updateUser(
        @Header("Authorization") token: String,
        @Body request: UserUpdateRequest
    ): Response<UserUpdateRequest>


}