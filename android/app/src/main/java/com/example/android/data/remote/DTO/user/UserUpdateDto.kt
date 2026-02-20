package com.example.android.data.remote.DTO.user

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class UserUpdateRequest(
    @SerializedName("id") val id: Int,
    @SerializedName("user") val user: String,
    @SerializedName("name") val name: String,
    @SerializedName("email") val email: String,
    @SerializedName("password") val password: String? = null,
    @SerializedName("admin") val admin: Boolean? = null
)

//Recebe
data class UserUpdateResponse(
    val message: String,
    val data: Boolean
)
