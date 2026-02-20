package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.User
import com.example.android.dominio.repository.UserRepositoryInterface

class UserByAllUserCase (private val repository: UserRepositoryInterface) {

    suspend fun excute(token: String): Result<List<User>> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))

            //Repositorio
            val byAllResult = repository.byAllUser(token = token)

            //Sucesso
            Result.success(byAllResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}