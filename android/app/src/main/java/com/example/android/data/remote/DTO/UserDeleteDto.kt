package com.example.android.data.remote.DTO

import com.google.gson.annotations.SerializedName

data class UserDeleteRequest(
    @SerializedName("user") val user: String
)

data class UserDeleteResponse(
    val message: String,
    val data: Boolean
)
