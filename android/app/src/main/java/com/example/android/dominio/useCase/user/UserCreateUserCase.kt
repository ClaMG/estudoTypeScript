package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.UserRepositoryInterface
import com.example.android.dominio.util.isValidEmail

class UserCreateUserCase (private val repository: UserRepositoryInterface){

    suspend fun excute(user: String, name: String, email: String, password: String): Result<Mensage> {
        return try {
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))
            if (name.isBlank()) return Result.failure(Exception("Informe o nome completo"))
            if (email.isBlank()) return Result.failure(Exception("Informe o email"))
            if (email.isValidEmail()) return Result.failure(Exception("Fomato incorreto de email, adicione @ e .com"))
            if (password.isBlank()) return Result.failure(Exception("Informe a senha"))

            //Repositorio
            val createResult = repository.createUser(user = user, name = name, email = email, password = password)

            //Sucesso
            Result.success(createResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}