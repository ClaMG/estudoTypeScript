package com.example.android.di

import com.example.android.constants.Constants
import com.example.android.data.remote.api.ApiUserInterface
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {

    val apiService: ApiUserInterface by lazy {
        Retrofit.Builder()
            .baseUrl(Constants.BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiUserInterface::class.java)
    }
}