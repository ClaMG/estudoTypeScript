package com.example.android.ui.user.home

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.android.R
import com.example.android.ui.user.create.CreateUserActivity
import com.example.android.ui.user.login.LoginActivity

class HomeActivity : AppCompatActivity() {
    private lateinit var btnLogin_home: Button
    private lateinit var btnRegister_home: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_home)

        //Componentes
        //Botões
        btnLogin_home = findViewById(R.id.btnLogin_home);
        btnRegister_home = findViewById(R.id.btnRegister_home);

        //Eventos
        //Ir para o login
        btnLogin_home.setOnClickListener{
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }

        //Ir para o cadastrar
        btnRegister_home.setOnClickListener {
            val intent = Intent(this, CreateUserActivity::class.java)
            startActivity(intent)
        }


    }
}