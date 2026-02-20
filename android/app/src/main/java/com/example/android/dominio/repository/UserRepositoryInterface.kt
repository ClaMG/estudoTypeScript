package com.example.android.dominio.repository

import com.example.android.dominio.model.Login
import com.example.android.dominio.model.Mensage
import com.example.android.dominio.model.User

interface UserRepositoryInterface {
    //Create
    suspend fun create(user: String, name: String, email: String, password: String): Mensage;
    //Login
    suspend fun login(user: String, password: String): Login;
    //By All
    suspend fun byAll(token: String): List<User>;
    //Delete
    suspend fun delete(token: String, user: String ): Mensage;
    //Update
    suspend fun update(token: String, id: Int, user: String, name: String, email: String, password: String): Mensage;
    //By Id
    suspend fun byId(token: String, user: String): User;
}