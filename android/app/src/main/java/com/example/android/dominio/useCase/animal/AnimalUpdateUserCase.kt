package com.example.android.dominio.useCase.animal

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.AnimalRepositoryInterface

class AnimalUpdateUserCase (private val repository: AnimalRepositoryInterface) {

    suspend fun excute(token: String, id: Int, name: String, age: Int, species: String, gender: String ): Result<Mensage> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))
            if (id == null) return Result.failure(Exception("Id do pet não localizado"))
            if (name.isBlank()) return Result.failure(Exception("Informe o nome do pet"))
            if (age == null) return Result.failure(Exception("Informe a idade do pet"))
            if (species.isBlank()) return Result.failure(Exception("Informe a especie do pet"))
            if (gender.isBlank()) return Result.failure(Exception("Informe o gênero do pet"))

            //Repositorio
            val updateResult = repository.updateAnimal(token = token, id = id, name = name, age = age, species = species, gender= gender)

            //Sucesso
            Result.success(updateResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}