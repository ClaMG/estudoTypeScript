package com.example.android.ui.user.login

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ImageButton
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.lifecycleScope
import com.example.android.R
import com.example.android.ui.user.create.CreateUserActivity
import com.example.android.ui.user.profile.ProfileActivity
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class LoginActivity : AppCompatActivity() {

    private lateinit var viewModel: LoginViewModel

    private lateinit var txUser_login: EditText
    private lateinit var txPassword_login: EditText

    private lateinit var linkPassword_login: TextView
    private lateinit var linkCreate_login: TextView

    private lateinit var btnLogin_login: Button
    private lateinit var btnEye_login: ImageButton


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_login)

        //Componentes

        //Inputs
        txUser_login = findViewById(R.id.txUser_login)
        txPassword_login = findViewById(R.id.txPassword_login)

        //Links
        linkPassword_login = findViewById(R.id.linkPassword_login)
        linkCreate_login = findViewById(R.id.linkCreate_login)

        //Botões
        btnLogin_login = findViewById(R.id.btnLogin_login)
        btnEye_login = findViewById(R.id.btnEye_login)

        //Observador
        setupObservers()

        //Eventos
        linkPassword_login.setOnClickListener {
            //tela
            /*
            * val intent = Intent(this, nome da class::class.java)
            startActivity(intent)
            finish()
            * */
        }

        //Ir para Cadastrar usuário
        linkCreate_login.setOnClickListener {
            val intent = Intent(this, CreateUserActivity::class.java)
            startActivity(intent)
            finish()
        }

        btnLogin_login.setOnClickListener {
            val user = txUser_login.text.toString()
            val password = txPassword_login.text.toString()

            viewModel.logar(user, password)
        }

        btnEye_login.setOnClickListener {
            //logica do olho
        }
    }

    //Observar a situação de login
    private fun setupObservers() {
        viewModel.state.observe(this) { state ->
            when (state) {

                is LoginState.Loading -> {//Carregando e trava o botão
                    btnLogin_login.isEnabled = false
                }

                is LoginState.Success -> {//Se deu sucesso
                    //Mensagem de sucesso
                    var menssage: String = state.login.menssage ?: "Login Realizado com Sucesso"
                    Toast.makeText(this, menssage, Toast.LENGTH_SHORT).show()

                    //Outra pagina
                    lifecycleScope.launch{
                        delay(1500)
                        val intent = Intent(this@LoginActivity, ProfileActivity::class.java)
                        //Passa o token
                        intent.putExtra("USER_TOKEN", state.login.token)
                        startActivity(intent)
                        finish()
                    }
                }
                is LoginState.Error -> {//Se der erro
                    btnLogin_login.isEnabled = true
                    //mensagem de erro
                    Toast.makeText(this, state.message, Toast.LENGTH_SHORT).show()
                }
                else -> {}
            }
        }
    }
}