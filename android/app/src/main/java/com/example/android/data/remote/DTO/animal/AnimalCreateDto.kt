package com.example.android.data.remote.DTO.animal

import com.google.gson.annotations.SerializedName


//formato de como ... da api

//Envia
data class AnimalCreateRequest(
    @SerializedName("name") val name: String,
    @SerializedName("age") val age: Int,
    @SerializedName("species") val species: String,
    @SerializedName("gender") val gender: String
)

//Recebe
data class AnimalCreateResponse(
    val message: String,
    val data: Boolean
)
