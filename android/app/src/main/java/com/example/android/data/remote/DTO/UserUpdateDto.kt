package com.example.android.data.remote.DTO

import com.google.gson.annotations.SerializedName

data class UserUpdateRequest(
    @SerializedName("id") val id: Int,
    @SerializedName("user") val user: String,
    @SerializedName("name") val name: String,
    @SerializedName("email") val email: String,
    @SerializedName("password") val password: String? = "",
    @SerializedName("admin") val admin: Boolean? = null
)
data class UserUpdateResponse(
    val message: String,
    val data: Boolean
)
