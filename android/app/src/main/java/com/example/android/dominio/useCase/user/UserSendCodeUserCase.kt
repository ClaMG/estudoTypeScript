package com.example.android.dominio.useCase.user

import com.example.android.dominio.model.Mensage
import com.example.android.dominio.repository.UserRepositoryInterface

class UserSendCodeUserCase (private val repository: UserRepositoryInterface){

    suspend fun execute(user: String, name: String): Result<Mensage> {
        return try {
            if (user.isBlank()) return Result.failure(Exception("Informe o usuário"))
            if (name.isBlank()) return Result.failure(Exception("Informe o nome do usuário"))

            //Repositorio
            val sendCodeResult = repository.sendCodeUser(user = user, name= name)

            //Sucesso
            Result.success(sendCodeResult)
        } catch (e: Exception) {
            //Erro do ErrorClass
            Result.failure(e)
        }
    }
}