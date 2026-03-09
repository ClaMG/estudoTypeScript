package com.example.android.data.remote.DTO.user

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class UserCreateAdminRequest(
    @SerializedName("user") val user: String,
    @SerializedName("name") val name: String,
    @SerializedName("email") val email: String,
    @SerializedName("admin") val admin: Boolean
)

//Recebe
data class UserCreateAdminResponse(
    val message: String,
    val data: Boolean
)