package com.example.android.data.remote.DTO.user

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class UserUpdatePasswordRequest(
    @SerializedName("user") val user: String,
    @SerializedName("code") val code: String
)

//Recebe
data class UserUpdatePasswordResponse(
    val message: String,
    val data: Boolean
)