package com.example.android.data.remote.DTO.animal

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class AnimalByAllRequest(
    @SerializedName("idView") val idView: Int? = null
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
