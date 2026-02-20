package com.example.android.dominio.repository

import com.example.android.dominio.model.Login
import com.example.android.dominio.model.Mensage
import com.example.android.dominio.model.User

interface UserRepositoryInterface {
    //Create
    suspend fun createUser(user: String, name: String, email: String, password: String): Mensage;
    //Login
    suspend fun loginUser(user: String, password: String): Login;
    //By All
    suspend fun byAllUser(token: String): List<User>;
    //Delete
    suspend fun deleteUser(token: String, user: String ): Mensage;
    //Update
    suspend fun updateUser(token: String, id: Int, user: String, name: String, email: String, password: String?, admin: Boolean?): Mensage;
    //By Id
    suspend fun byIdUser(token: String, user: String): User;
}