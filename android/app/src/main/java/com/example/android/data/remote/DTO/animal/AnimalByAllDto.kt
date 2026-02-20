package com.example.android.data.remote.DTO.animal

//formato de como ... da api

//Envia
data class AnimalByAllRequest(
    val idView: Int? = null
)

//Recebe
data class AnimalByAllResponse(
    val id: Int,
    val idUser: Int,
    val name: String,
    val age: Int,
    val species: String,
    val gender: Int
)
