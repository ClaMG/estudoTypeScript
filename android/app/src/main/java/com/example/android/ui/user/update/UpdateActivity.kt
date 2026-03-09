package com.example.android.ui.user.update

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ImageButton
import android.widget.Switch
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.android.R
import com.example.android.ui.user.profile.ProfileActivity

class UpdateActivity : AppCompatActivity() {

    private lateinit var txUser_update: EditText
    private lateinit var txName_update: EditText
    private lateinit var txEmail_update: EditText
    private lateinit var txPassword_update: EditText
    private lateinit var txPasswordRepeat_update: EditText

    private lateinit var btnBack_update: ImageButton
    private lateinit var btnUpdate: Button

    private lateinit var swAdmin_update: Switch

    private lateinit var btnEye_update: ImageButton
    private lateinit var btnEyeRepeat_update: ImageButton

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_user_update)

        //Construtores
        //Text View
        txUser_update = findViewById(R.id.txUser_update)
        txName_update = findViewById(R.id.txName_update)
        txEmail_update = findViewById(R.id.txEmail_update)
        txPassword_update = findViewById(R.id.txPassword_update)
        txPasswordRepeat_update = findViewById(R.id.txPasswordRepeat_update)

        //Buttons
        btnBack_update = findViewById(R.id.btnBack_update)
        btnUpdate = findViewById(R.id.btnUpdate)

        btnEye_update = findViewById(R.id.btnEye_update)
        btnEyeRepeat_update = findViewById(R.id.btnEyeRepeat_update)

        //Switch
        swAdmin_update = findViewById(R.id.swAdmin_update)

        //Eventos
        //Voltar
        btnBack_update.setOnClickListener {
            val intent = Intent(this, ProfileActivity::class.java)
            startActivity(intent)
        }

        //Atualizar
        btnUpdate.setOnClickListener {

        }

        //Olho da senha
        btnEye_update.setOnClickListener {

        }

        btnEyeRepeat_update.setOnClickListener {

        }

    }
}