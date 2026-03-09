package com.example.android.data.remote.api

import com.example.android.data.remote.DTO.user.UserAdminRequest
import com.example.android.data.remote.DTO.user.UserAdminResponse
import com.example.android.data.remote.DTO.user.UserByAllResponse
import com.example.android.data.remote.DTO.user.UserByIdRequest
import com.example.android.data.remote.DTO.user.UserByIdResponse
import com.example.android.data.remote.DTO.user.UserCreateAdminRequest
import com.example.android.data.remote.DTO.user.UserCreateAdminResponse
import com.example.android.data.remote.DTO.user.UserCreateRequest
import com.example.android.data.remote.DTO.user.UserCreateResponse
import com.example.android.data.remote.DTO.user.UserDeleteRequest
import com.example.android.data.remote.DTO.user.UserDeleteResponse
import com.example.android.data.remote.DTO.user.UserLoginRequest
import com.example.android.data.remote.DTO.user.UserLoginResponse
import com.example.android.data.remote.DTO.user.UserSendCodeRequest
import com.example.android.data.remote.DTO.user.UserSendCodeResponse
import com.example.android.data.remote.DTO.user.UserUpdatePasswordRequest
import com.example.android.data.remote.DTO.user.UserUpdatePasswordResponse
import com.example.android.data.remote.DTO.user.UserUpdateRequest
import com.example.android.data.remote.DTO.user.UserUpdateResponse
import com.example.android.data.remote.DTO.user.UserViewAdminResponse
import com.example.android.dominio.model.User
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.HTTP
import retrofit2.http.Header
import retrofit2.http.POST
import retrofit2.http.PUT

//Usa as rotas
interface ApiUser {
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

    //Create Admin
    @POST("user/create-admin")
    suspend fun registerAdminUserApi(
        @Header("Authorization") token: String,
        @Body request: UserCreateAdminRequest
    ): Response<UserCreateAdminResponse>

    //Get All
    @GET("user/users")
    suspend fun byAllUserApi(
        @Header("Authorization") token: String
    ): Response<List<UserByAllResponse>>


    //Delete
    @HTTP(method = "DELETE", path = "user/delete", hasBody = true)
    suspend fun deleteUserApi(
        @Header("Authorization") token: String,
        @Body request: UserDeleteRequest
    ): Response<UserDeleteResponse>


    //Update
    @PUT("user/update")
    suspend fun updateUserApi(
        @Header("Authorization") token: String,
        @Body request: UserUpdateRequest
    ): Response<UserUpdateResponse>

    //Get By Id
    @HTTP(method = "GET", path = "user/user", hasBody = true)
    suspend fun byIdUserApi(
        @Header("Authorization") token: String,
        @Body request: UserByIdRequest
    ): Response<UserByIdResponse>

    //View Admins
    @GET("user/view-admins")
    suspend fun viewAdminUserApi(
        @Header("Authorization") token: String
    ): Response<List<UserViewAdminResponse>>

    //Request Admin
    @POST("user/send-admin")
    suspend fun adminUserApi(
        @Header("Authorization") token: String,
        @Body request: UserAdminRequest
    ): Response<UserAdminResponse>

    //Send Code
    @POST("user/send-code")
    suspend fun sendCodeUserApi(
        @Body request: UserSendCodeRequest
    ): Response<UserSendCodeResponse>

    //Update Password
    @PUT("user/update-password")
    suspend fun updatePasswordUserApi(
        @Body request: UserUpdatePasswordRequest
    ): Response<UserUpdatePasswordResponse>

}