package com.example.android.data.repository

import com.example.android.data.remote.DTO.user.UserByIdRequest
import com.example.android.data.remote.DTO.user.UserCreateRequest
import com.example.android.data.remote.DTO.user.UserDeleteRequest
import com.example.android.data.remote.DTO.user.UserLoginRequest
import com.example.android.data.remote.DTO.user.UserUpdateRequest
import com.example.android.data.remote.RemoteDataSource
import com.example.android.dominio.model.Login
import com.example.android.dominio.model.Mensage
import com.example.android.dominio.model.User
import kotlin.String

class UserRepositoryImpl (private val remoteDataSource: RemoteDataSource){

    //Create
    suspend fun create(user: String, name: String, email: String, password: String): Mensage {
        //Dto envia
        val request = UserCreateRequest(user = user, name = name, email = email, password = password)
        // DataSource
        val response = remoteDataSource.registerUserDataSource(request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //Login
    suspend fun login(user: String, password: String): Login {
        //Dto envia
        val request = UserLoginRequest(user = user, password = password)
        // DataSource
        val response = remoteDataSource.loginUserDataSource(request)

        // Model de resposta
        return Login(
            mensage = response.message,
            token = response.token
        )
    }

    //By All
    suspend fun byAll(token: String): List<User> {
        // DataSource
        val response = remoteDataSource.byAllUserDataSource(token)

        // Model de resposta
        return response.map { dto ->
            User(
                user = dto.user,
                name = dto.name,
                email = dto.email,
                admin = dto.admin,
                id = dto.id
            )
        }
    }

    //Delete
    suspend fun delete(token: String, user: String ): Mensage {
        //Dto envia
        val request = UserDeleteRequest(user = user)
        // DataSource
        val response = remoteDataSource.deleteUserDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //Update
    suspend fun update(token: String, id: Int, user: String, name: String, email: String, password: String): Mensage {
        //Dto envia
        val request = UserUpdateRequest(id= id, user = user, name = name, email = email, password = password)
        // DataSource
        val response = remoteDataSource.updateUserDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }
    
    //By Id
    suspend fun byId(token: String, user: String): User {
        //Dto envia
        val request = UserByIdRequest(user = user)
        // DataSource
        val response = remoteDataSource.byIdUserDataSource(token, request)

        // Model de resposta
        return User(
            user = response.user,
            name = response.name,
            email= response.email,
            admin= response.admin
        )
    }
}