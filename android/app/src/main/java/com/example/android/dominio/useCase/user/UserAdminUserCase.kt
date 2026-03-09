package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.UserRepositoryInterface

class UserAdminUserCase (private val repository: UserRepositoryInterface) {

    suspend fun execute(token: String, user: String): Result<Mensage> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))

            //Repositorio
            val adminResult = repository.adminUser(token = token, user = user)

            //Sucesso
            Result.success(adminResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }

}