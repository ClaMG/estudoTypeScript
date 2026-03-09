package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.UserRepositoryInterface

class USerUpdadePasswordUserCase (private val repository: UserRepositoryInterface){

    suspend fun execute(user: String, code: String): Result<Mensage> {
        return try {
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))
            if (code.isBlank()) return Result.failure(Exception("Informe o código"))

            //Repositorio
            val updatePasswordResult = repository.updatePasswordUser(user = user, code= code)

            //Sucesso
            Result.success(updatePasswordResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}