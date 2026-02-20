package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.User
import com.example.android.dominio.repository.UserRepositoryInterface

class UserByIdUserCase (private val repository: UserRepositoryInterface) {

    suspend fun excute(token: String, user: String): Result<User> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))

            //Repositorio
            val byIdResult = repository.byIdUser(token = token, user = user)

            //Sucesso
            Result.success(byIdResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}