package com.example.android.data.remote.DTO.animal

//formato de como ... da api

//Envia
data class AnimalDeleteRequest(
    val id: Int,
    val name: String
)

//Recebe
data class AnimalDeleteResponse(
    val message: String,
    val data: Boolean
)
