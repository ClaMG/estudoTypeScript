package com.example.android.data.remote.api

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
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.HTTP
import retrofit2.http.Header
import retrofit2.http.POST
import retrofit2.http.PUT

//envia e recebe os dados usando as rotas
interface ApiUserInterface {
    //Create
    @POST("user/create")
    suspend fun registerUserApi(
        @Body request: UserCreateRequest
    ): Response<UserCreateResponse>

    //Login
    @POST("user/login")
    suspend fun loginUserApi(
        @Body request: UserLoginRequest
    ): Response<UserLoginResponse>

    //Get All
    @GET("user/users")
    suspend fun byAllUser(
        @Header("Authorization") token: String
    ): Response<List<UserByAllResponse>>


    //Delete
    @HTTP(method = "DELETE", path = "user/delete", hasBody = true)
    suspend fun deleteUser(
        @Header("Authorization") token: String,
        @Body request: UserDeleteRequest
    ): Response<UserDeleteResponse>


    //Update
    @PUT("user/update")
    suspend fun updateUser(
        @Header("Authorization") token: String,
        @Body request: UserUpdateRequest
    ): Response<UserUpdateResponse>

    //Get By Id
    @HTTP(method = "GET", path = "user/user", hasBody = true)
    suspend fun byIdUser(
        @Header("Authorization") token: String,
        @Body request: UserByIdRequest
    ): Response<UserByIdResponse>



}