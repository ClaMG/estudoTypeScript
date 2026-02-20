package com.example.android.data.remote.DTO.user

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class UserLoginRequest(
    @SerializedName("user") val user: String,
    @SerializedName("password") val password: String
)

//Recebe
data class UserLoginResponse(
    val message: String,
    val token: String
)