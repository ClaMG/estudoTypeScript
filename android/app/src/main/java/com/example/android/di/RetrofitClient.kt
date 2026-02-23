package com.example.android.di

import com.example.android.data.remote.api.ApiUser
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import com.example.android.data.remote.api.ApiAnimal

object RetrofitClient {
//corrigir
    private val BASE_URL = "BuildConfig.BASE_URL"


    private val retrofit: Retrofit by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    val apiUsers: ApiUser by lazy { retrofit.create(ApiUser::class.java) }
    val apiAnimal: ApiAnimal by lazy { retrofit.create(ApiAnimal::class.java) }
}