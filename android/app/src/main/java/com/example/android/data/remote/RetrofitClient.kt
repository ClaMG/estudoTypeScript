package com.example.android.data.remote

import com.example.android.constants.Constants
import com.example.android.data.remote.api.ApiUser
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {

    val apiService: ApiUser by lazy {
        Retrofit.Builder()
            .baseUrl(Constants.BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiUser::class.java)
    }
}