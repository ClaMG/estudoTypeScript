package com.example.android.dominio.repository

import com.example.android.dominio.model.Animal
import com.example.android.dominio.model.Mensage

interface AnimalRepositoryInterface {

    //Create
    suspend fun createAnimal(token: String, name: String, age: Int, species: String, gender: String ): Mensage;
    //By All
    suspend fun byAllAnimal(token: String, idView: Int? ): List<Animal>;
    //Delete
    suspend fun deleteAnimal(token: String, id: Int, name: String ): Mensage;
    //Update
    suspend fun updateAnimal(token: String, id: Int, name: String, age: Int, species: String, gender: String ): Mensage;
}