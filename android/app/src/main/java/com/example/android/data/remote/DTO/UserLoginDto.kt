package com.example.android.data.remote.DTO

import com.google.gson.annotations.SerializedName

data class UserLoginRequest(
    @SerializedName("user") val user: String,
    @SerializedName("password") val password: String
)

data class UserLoginResponse(
    val message: String,
    val token: String
)