package com.example.android.dominio.useCase.animal

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.AnimalRepositoryInterface

class AnimalDeleteUserCase (private val repository: AnimalRepositoryInterface) {

    suspend fun execute(token: String, id: Int, name: String): Result<Mensage> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))
            if (id == null) return Result.failure(Exception("Id do pet não localizado"))
            if (name.isBlank()) return Result.failure(Exception("Informe o nome do pet"))

            //Repositorio
            val deleteResult = repository.deleteAnimal(token = token, id = id, name = name)

            //Sucesso
            Result.success(deleteResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}