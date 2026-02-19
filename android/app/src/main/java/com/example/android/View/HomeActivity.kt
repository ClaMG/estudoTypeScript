package com.example.android.View

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.android.R

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