package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.UserRepositoryInterface
import com.example.android.dominio.util.isValidEmail

class UserCreateAdminUserCase (private val repository: UserRepositoryInterface){

    suspend fun execute(token: String, user: String, name: String, email: String, admin: Boolean): Result<Mensage> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))
            if (name.isBlank()) return Result.failure(Exception("Informe o nome completo"))
            if (email.isBlank()) return Result.failure(Exception("Informe o email"))
            if (email.isValidEmail()) return Result.failure(Exception("Fomato incorreto de email, adicione @ e .com"))
            if (admin == null) return Result.failure(Exception("Informe se o usuário é administrador ou não"))

            //Repositorio
            val createAdminResult = repository.createAdminUser(token = token, user = user, name = name, email = email, admin = admin)

            //Sucesso
            Result.success(createAdminResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}