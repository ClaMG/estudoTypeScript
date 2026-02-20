package com.example.android.data.remote.DTO.user

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class UserByIdRequest(
    @SerializedName("user") val user: String
)

//Recebe
data class UserByIdResponse(
    val user: String,
    val name: String,
    val email: String,
    val admin: Boolean
)
