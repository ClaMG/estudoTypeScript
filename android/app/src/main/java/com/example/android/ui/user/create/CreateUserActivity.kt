package com.example.android.ui.user.create

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ImageButton
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.android.R
import com.example.android.ui.user.login.LoginActivity

class CreateUserActivity : AppCompatActivity() {

    private lateinit var txUser_create: EditText
    private lateinit var txName_create: EditText
    private lateinit var txEmail_create: EditText
    private lateinit var txPassword_create: EditText
    private lateinit var txPasswordRepeat_create: EditText

    private lateinit var btnRegister_create: Button
    private lateinit var linkLogin_create: TextView

    private lateinit var btnEye_create: ImageButton
    private lateinit var btnEyeRepeat_create: ImageButton

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_user_create)

        //Componentes
        txUser_create = findViewById(R.id.txUser_create)
        txName_create = findViewById(R.id.txName_create)
        txEmail_create = findViewById(R.id.txEmail_create)
        txPassword_create = findViewById(R.id.txPassword_create)
        txPasswordRepeat_create = findViewById(R.id.txPasswordRepeat_create)

        btnRegister_create = findViewById(R.id.btnRegister_create)
        linkLogin_create = findViewById(R.id.linkLogin_create)

        btnEye_create = findViewById(R.id.btnEye_create)
        btnEyeRepeat_create = findViewById(R.id.btnEyeRepeat_create)

        //Eventos
        btnRegister_create.setOnClickListener {

        }

        linkLogin_create.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }

        btnEye_create.setOnClickListener {

        }

        btnEyeRepeat_create.setOnClickListener {

        }



    }
}