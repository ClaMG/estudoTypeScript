package com.example.android.dominio.repository

import com.example.android.dominio.model.Login
import com.example.android.dominio.model.Mensage
import com.example.android.dominio.model.User

interface UserRepositoryInterface {
    //Create
    suspend fun createUser(user: String, name: String, email: String, password: String): Mensage;
    //Login
    suspend fun loginUser(user: String, password: String): Login;
    //Create Admin
    suspend fun createAdminUser(token: String, user: String, name: String, email: String, admin: Boolean): Mensage;
    //By All
    suspend fun byAllUser(token: String): List<User>;
    //Delete
    suspend fun deleteUser(token: String, user: String ): Mensage;
    //Update
    suspend fun updateUser(token: String, id: Int, user: String, name: String, email: String, password: String?, admin: Boolean?): Mensage;
    //By Id
    suspend fun byIdUser(token: String, user: String): User;
    //View Admins
    suspend fun viewAdminUser(token: String): List<User>;
    //Request Admin
    suspend fun adminUser(token: String, user: String): Mensage;
    //Send Code
    suspend fun sendCodeUser(user: String, name: String): Mensage;
    //Update Password
    suspend fun updatePasswordUser(user: String, code: String): Mensage;


}