package com.example.android.data.remote.DTO.animal


//formato de como ... da api

//Envia
data class AnimalCreateRequest(
    val name: String,
    val age: Int,
    val species: String,
    val gender: Int
)

//Recebe
data class AnimalCreateResponse(
    val message: String,
    val data: Boolean
)
