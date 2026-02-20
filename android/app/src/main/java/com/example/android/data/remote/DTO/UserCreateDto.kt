package com.example.android.data.remote.DTO

import com.google.gson.annotations.SerializedName

data class UserCreateRequest(
    @SerializedName("user") val user: String,
    @SerializedName("name") val name: String,
    @SerializedName("email") val email: String,
    @SerializedName("password") val password: String
)

data class UserCreateResponse(
    val message: String,
    val data: Boolean
)
