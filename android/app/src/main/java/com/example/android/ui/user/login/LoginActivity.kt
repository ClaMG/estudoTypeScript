package com.example.android.ui.user.login

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.android.R
import com.example.android.ui.user.create.CreateUserActivity

class LoginActivity : AppCompatActivity() {

    private lateinit var txUser_login: EditText
    private lateinit var txPassword_login: EditText

    private lateinit var linkPassword_login: TextView
    private lateinit var linkCreate_login: TextView

    private lateinit var btnLogin_login: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_login)

        //Componentes
        txUser_login = findViewById(R.id.txUser_login)
        txPassword_login = findViewById(R.id.txPassword_login)

        linkPassword_login = findViewById(R.id.linkPassword_login)
        linkCreate_login = findViewById(R.id.linkCreate_login)

        btnLogin_login = findViewById(R.id.btnLogin_login)

        //Eventos
        linkPassword_login.setOnClickListener {
            //tela
        }

        linkCreate_login.setOnClickListener {
            val intent = Intent(this, CreateUserActivity::class.java)
            startActivity(intent)
        }

        btnLogin_login.setOnClickListener {

        }
    }
}