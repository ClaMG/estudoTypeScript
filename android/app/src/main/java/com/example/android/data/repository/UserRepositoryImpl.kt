package com.example.android.data.repository

import com.example.android.data.remote.DTO.user.UserAdminRequest
import com.example.android.data.remote.DTO.user.UserByIdRequest
import com.example.android.data.remote.DTO.user.UserCreateAdminRequest
import com.example.android.data.remote.DTO.user.UserCreateRequest
import com.example.android.data.remote.DTO.user.UserDeleteRequest
import com.example.android.data.remote.DTO.user.UserLoginRequest
import com.example.android.data.remote.DTO.user.UserSendCodeRequest
import com.example.android.data.remote.DTO.user.UserUpdatePasswordRequest
import com.example.android.data.remote.DTO.user.UserUpdateRequest
import com.example.android.data.remote.RemoteUserDataSource
import com.example.android.dominio.model.Login
import com.example.android.dominio.model.Mensage
import com.example.android.dominio.model.User
import com.example.android.dominio.repository.UserRepositoryInterface
import kotlin.String

class UserRepositoryImpl (private val remoteUserDataSource: RemoteUserDataSource): UserRepositoryInterface {

    //Create
    override suspend fun createUser(user: String, name: String, email: String, password: String): Mensage {
        //Dto envia
        val request = UserCreateRequest(user = user, name = name, email = email, password = password)
        // DataSource
        val response = remoteUserDataSource.registerUserDataSource(request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //Login
    override suspend fun loginUser(user: String, password: String): Login {
        //Dto envia
        val request = UserLoginRequest(user = user, password = password)
        // DataSource
        val response = remoteUserDataSource.loginUserDataSource(request)

        // Model de resposta
        return Login(
            menssage = response.message,
            token = response.token
        )
    }

    //Create Admin
    override suspend fun createAdminUser(token: String, user: String, name: String, email: String, admin: Boolean): Mensage {
        //Dto envia
        val request = UserCreateAdminRequest(user = user, name = name, email = email, admin = admin)
        // DataSource
        val response = remoteUserDataSource.registerAdminUserDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //By All
    override suspend fun byAllUser(token: String): List<User> {
        // DataSource
        val response = remoteUserDataSource.byAllUserDataSource(token)

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
    override suspend fun deleteUser(token: String, user: String ): Mensage {
        //Dto envia
        val request = UserDeleteRequest(user = user)
        // DataSource
        val response = remoteUserDataSource.deleteUserDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //Update
    override suspend fun updateUser(token: String, id: Int, user: String, name: String, email: String, password: String?, admin: Boolean?): Mensage {
        //Dto envia
        val request = UserUpdateRequest(id= id, user = user, name = name, email = email, password = password, admin= admin)
        // DataSource
        val response = remoteUserDataSource.updateUserDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //By Id
    override suspend fun byIdUser(token: String, user: String): User {
        //Dto envia
        val request = UserByIdRequest(user = user)
        // DataSource
        val response = remoteUserDataSource.byIdUserDataSource(token, request)

        // Model de resposta
        return User(
            user = response.user,
            name = response.name,
            email= response.email,
            admin= response.admin,
            password = response.password,
        )
    }

    //View Admins
    override suspend fun viewAdminUser(token: String): List<User> {
        // DataSource
        val response = remoteUserDataSource.viewAdminUserDataSource(token)

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

    //Request Admin
    override suspend fun adminUser(token: String, user: String): Mensage {
        //Dto envia
        val request = UserAdminRequest(user)
        // DataSource
        val response = remoteUserDataSource.adminUserDataSource(token, request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //Send Code
    override suspend fun sendCodeUser(user: String, name: String): Mensage {
        //Dto envia
        val request = UserSendCodeRequest(user, name)
        // DataSource
        val response = remoteUserDataSource.sendCodeUserDataSource(request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }

    //Update Password
    override suspend fun updatePasswordUser(user: String, code: String): Mensage {
        //Dto envia
        val request = UserUpdatePasswordRequest(user, code)
        // DataSource
        val response = remoteUserDataSource.updatePasswordUserDataSource(request)

        // Model de resposta
        return Mensage(
            mensage = response.message,
            data = response.data
        )
    }
}