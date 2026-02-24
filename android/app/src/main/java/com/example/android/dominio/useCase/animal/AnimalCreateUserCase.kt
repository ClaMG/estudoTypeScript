package com.example.android.dominio.useCase.animal

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.AnimalRepositoryInterface

class AnimalCreateUserCase (private val repository: AnimalRepositoryInterface) {

    suspend fun execute(token: String, name: String, age: Int, species: String, gender: String): Result<Mensage> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))
            if (name.isBlank()) return Result.failure(Exception("Informe o nome do pet"))
            if (age == null) return Result.failure(Exception("Informe a idade do pet"))
            if (species.isBlank()) return Result.failure(Exception("Informe a especie do pet"))
            if (gender.isBlank()) return Result.failure(Exception("Informe o gênero do pet"))

            //Repositorio
            val createResult = repository.createAnimal(token = token, name = name, age = age, species = species, gender= gender)

            //Sucesso
            Result.success(createResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}