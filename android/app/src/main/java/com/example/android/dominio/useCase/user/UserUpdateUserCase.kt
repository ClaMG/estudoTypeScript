package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.UserRepositoryInterface
import com.example.android.dominio.util.isValidEmail

class UserUpdateUserCase (private val repository: UserRepositoryInterface) {

    suspend fun excute(token: String, id: Int, user: String, name: String, email: String, password: String?, admin: Boolean?): Result<Mensage> {
        return try {
            if (token.isBlank()) return Result.failure(Exception("Token não localizado"))
            if (id == null) return Result.failure(Exception("Id do usuario para editar não localizado"))
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))
            if (name.isBlank()) return Result.failure(Exception("Informe o nome completo"))
            if (email.isBlank()) return Result.failure(Exception("Informe o email"))
            if (email.isValidEmail()) return Result.failure(Exception("Fomato incorreto de email, adicione @ e .com"))

            //Repositorio
            val updateResult = repository.updateUser(token = token, id = id, user= user, name = name, email = email, password = password, admin= admin)

            //Sucesso
            Result.success(updateResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}