package com.example.android.dominio.usecase

import com.example.android.dominio.model.Login
import com.example.android.dominio.repository.UserRepositoryInterface

class UserLoginUseCase (private val repository: UserRepositoryInterface) {

     suspend fun excute(user: String, password: String): Result<Login> {
        return try {
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))
            if (password.isBlank()) return Result.failure(Exception("Informe a senha"))

            //Repositorio
            val loginResult = repository.loginUser(user, password)

            //Sucesso
            Result.success(loginResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}