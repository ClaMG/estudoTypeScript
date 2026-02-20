package com.example.android.data.remote.DTO.animal

import com.google.gson.annotations.SerializedName

//formato de como ... da api

//Envia
data class AnimalDeleteRequest(
    @SerializedName("id") val id: Int,
    @SerializedName("name") val name: String
)

//Recebe
data class AnimalDeleteResponse(
    val message: String,
    val data: Boolean
)
