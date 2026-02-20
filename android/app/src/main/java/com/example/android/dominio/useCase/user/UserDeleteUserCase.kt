package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.UserRepositoryInterface

class UserDeleteUserCase (private val repository: UserRepositoryInterface){

    suspend fun excute(token: String, user: String): Result<Mensage> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))

            //Repositorio
            val deleteResult = repository.deleteUser(token = token, user = user)

            //Sucesso
            Result.success(deleteResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}