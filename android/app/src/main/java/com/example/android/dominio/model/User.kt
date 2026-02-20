package com.example.android.dominio.model

data class User(
    val id: Int,
    val user: String,
    val name: String,
    val email: String,
    val password: String?,
    val admin: Boolean?
)
