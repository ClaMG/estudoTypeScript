package com.example.android.data.remote.DTO.user

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class UserSendCodeRequest(
    @SerializedName("user") val user: String,
    @SerializedName("name") val name: String
)

//Recebe
data class UserSendCodeResponse(
    val message: String,
    val data: Boolean
)