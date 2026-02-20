package com.example.android.data.remote.erro

import com.google.gson.Gson
import retrofit2.Response

class ErrorClass {
    fun parseError(response: Response<*>): String {
        return try {
            val errorBody = response.errorBody()?.string()
            val gson = Gson()
            val errorObj = gson.fromJson(errorBody, ErroMensage::class.java)

            errorObj.message
        } catch (e: Exception) {
            "Erro desconhecido ao processar resposta"
        }
    }
}