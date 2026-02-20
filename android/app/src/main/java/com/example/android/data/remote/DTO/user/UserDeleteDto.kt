package com.example.android.data.remote.DTO.user

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class UserDeleteRequest(
    @SerializedName("user") val user: String
)

//Recebe
data class UserDeleteResponse(
    val message: String,
    val data: Boolean
)
