package com.example.android.data.remote.DTO.user

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class UserAdminRequest(
    @SerializedName("user") val user: String
)

//Recebe
data class UserAdminResponse(
    val message: String,
    val data: Boolean
)