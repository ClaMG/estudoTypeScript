package com.example.android.data.remote.DTO.user

//formato de como ... da api


//Recebe
data class UserByAllResponse(
    val id: Int,
    val user: String,
    val name: String,
    val email: String,
    val admin: Boolean
)
