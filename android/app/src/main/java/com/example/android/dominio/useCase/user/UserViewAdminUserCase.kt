package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.User
import com.example.android.dominio.repository.UserRepositoryInterface

class UserViewAdminUserCase (private val repository: UserRepositoryInterface) {

    suspend fun execute(token: String): Result<List<User>> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))

            //Repositorio
            val viewAdminResult = repository.viewAdminUser(token = token)

            //Sucesso
            Result.success(viewAdminResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }

}
