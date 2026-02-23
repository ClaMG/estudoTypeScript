package com.example.android.ui.user.splash

import android.content.Intent
import android.os.Bundle
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.example.android.R
import com.example.android.ui.user.home.HomeActivity
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class SplashActivity : AppCompatActivity() {

    private lateinit var tvVersion: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_splash)

        //Componentes
        tvVersion = findViewById(R.id.tvVersion)

        //Eventos
        tvVersion.setText("Verção 0.22.05")

        lifecycleScope.launch {
            delay(3000) // Espera 3 segundos sem travar o app

            val intent = Intent(this@SplashActivity, HomeActivity::class.java)
            startActivity(intent)
            finish()
        }

    }
}