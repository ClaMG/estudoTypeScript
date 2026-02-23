package com.example.android.ui.user.home

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.android.R
import com.example.android.ui.user.create.CreateActivity
import com.example.android.ui.user.login.LoginActivity

class HomeActivity : AppCompatActivity() {
    private lateinit var btnLogin_home: Button
    private lateinit var btnRegister_home: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_home)

        btnLogin_home = findViewById(R.id.btnLogin_home);
        btnRegister_home = findViewById(R.id.btnRegister_home);

        btnLogin_home.setOnClickListener{
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }

        btnRegister_home.setOnClickListener {
            val intent = Intent(this, CreateActivity::class.java)
            startActivity(intent)
        }


    }
}