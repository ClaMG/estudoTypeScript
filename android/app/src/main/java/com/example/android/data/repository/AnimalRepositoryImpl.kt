package com.example.android.data.repository

import com.example.android.data.remote.DTO.animal.AnimalByAllRequest
import com.example.android.data.remote.DTO.animal.AnimalCreateRequest
import com.example.android.data.remote.DTO.animal.AnimalDeleteRequest
import com.example.android.data.remote.DTO.animal.AnimalUpdateRequest
import com.example.android.data.remote.RemoteAnimalDataSource
import com.example.android.dominio.model.Animal
import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.AnimalRepositoryInterface
import kotlin.Int

class AnimalRepositoryImpl (private val remoteAnimalDataSource: RemoteAnimalDataSource): AnimalRepositoryInterface {

    //Create
    override suspend fun createAnimal(token: String, name: String, age: Int, species: String, gender: String ): Mensage {
        //Dto envia
        val request = AnimalCreateRequest(name = name, age = age, species = species, gender= gender)
        // DataSource
        val response = remoteAnimalDataSource.createAnimalDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //By All
    override suspend fun byAllAnimal(token: String, idView: Int? ): Animal {
        //Dto envia
        val request = AnimalByAllRequest(idView = idView)
        // DataSource
        val response = remoteAnimalDataSource.byAllAnimalDataSource(token, request)

        // Model de resposta
        return Animal(
            id = response.id,
            idUser = response.idUser,
            name = response.name,
            age = response.age,
            species = response.species,
            gender = response.gender
        )
    }

    //Delete
    override suspend fun deleteAnimal(token: String, id: Int, name: String ): Mensage {
        //Dto envia
        val request = AnimalDeleteRequest(id = id, name = name)
        // DataSource
        val response = remoteAnimalDataSource.deleteAnimalDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }
    //Update
    override suspend fun updateAnimal(token: String, id: Int, name: String, age: Int, species: String, gender: String ): Mensage {
        //Dto envia
        val request = AnimalUpdateRequest(id = id, name = name, age = age, species = species, gender = gender)
        // DataSource
        val response = remoteAnimalDataSource.updateAnimalDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }
}