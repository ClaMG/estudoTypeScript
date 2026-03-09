package com.example.android.dominio.model

data class User(
    val user: String,
    val name: String,
    val email: String,
    val admin: Boolean,
    val password: String? = null,
    val id: Int? = null
)
