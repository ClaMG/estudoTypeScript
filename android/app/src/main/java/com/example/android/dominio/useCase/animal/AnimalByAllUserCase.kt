package com.example.android.dominio.useCase.animal

import com.example.android.dominio.model.Animal
import com.example.android.dominio.repository.AnimalRepositoryInterface

class AnimalByAllUserCase (private val repository: AnimalRepositoryInterface) {

    suspend fun execute(token: String, idView: Int?): Result<List<Animal>> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))

            //Repositorio
            val byAllResult = repository.byAllAnimal(token = token, idView = idView)

            //Sucesso
            Result.success(byAllResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}