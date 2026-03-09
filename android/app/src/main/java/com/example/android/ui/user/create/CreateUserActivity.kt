package com.example.android.ui.user.create

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ImageButton
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.lifecycleScope
import com.example.android.R
import com.example.android.ui.user.home.HomeActivity
import com.example.android.ui.user.login.LoginActivity
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class CreateUserActivity : AppCompatActivity() {

    private lateinit var viewModel: CreateViewModel
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

        viewModel = ViewModelProvider(this).get(CreateViewModel::class.java)

        //Componentes
        //Inputs
        txUser_create = findViewById(R.id.txUser_create)
        txName_create = findViewById(R.id.txName_create)
        txEmail_create = findViewById(R.id.txEmail_create)
        txPassword_create = findViewById(R.id.txPassword_create)
        txPasswordRepeat_create = findViewById(R.id.txPasswordRepeat_create)

        //Link
        linkLogin_create = findViewById(R.id.linkLogin_create)

        //Botões
        btnRegister_create = findViewById(R.id.btnRegister_create)

        btnEye_create = findViewById(R.id.btnEye_create)
        btnEyeRepeat_create = findViewById(R.id.btnEyeRepeat_create)

        //Observador
        setupObservers()

        //Eventos
        //Registrar Usuário
        btnRegister_create.setOnClickListener {
            val user = txUser_create.text.toString()
            val name = txName_create.text.toString()
            val email = txEmail_create.text.toString()
            val password = txPassword_create.text.toString()
            val passwordRepeat = txPasswordRepeat_create.text.toString()

            viewModel.create(user, name, email, password, passwordRepeat)
        }

        //Ir para o login
        linkLogin_create.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }

        //Olho da senha
        btnEye_create.setOnClickListener {

        }

        btnEyeRepeat_create.setOnClickListener {

        }
    }

    private fun setupObservers() {
        viewModel.state.observe(this) { state ->
            when (state) {

                is CreateState.Loading -> {
                    btnRegister_create.isEnabled = false
                }

                is CreateState.Success -> {
                    var menssage: String = state.create.mensage ?: "Usuário registrado com Sucesso"
                    Toast.makeText(this, menssage, Toast.LENGTH_SHORT).show()

                    lifecycleScope.launch{
                        delay(1500)
                        val intent = Intent(this@CreateUserActivity, HomeActivity::class.java)
                        startActivity(intent)
                        finish()
                    }
                }
                is CreateState.Error -> {
                    btnRegister_create.isEnabled = true
                    Toast.makeText(this, state.message, Toast.LENGTH_SHORT).show()
                }
                else -> {}
            }
        }
    }
}