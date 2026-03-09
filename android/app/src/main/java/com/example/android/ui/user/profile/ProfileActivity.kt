package com.example.android.ui.user.profile

import android.content.Intent
import android.os.Bundle
import android.util.Base64
import android.view.View
import android.view.ViewStub
import android.widget.Button
import android.widget.ImageButton
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.lifecycleScope
import com.example.android.R
import com.example.android.ui.animal.byAll.AnimalManagementActivity
import com.example.android.ui.user.users.UsersManagementActivity
import com.example.android.ui.user.home.HomeActivity
import com.example.android.ui.user.login.LoginState
import com.example.android.ui.user.update.UpdateActivity
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.json.JSONObject

class ProfileActivity : AppCompatActivity() {

    private lateinit var viewModel: ProfileViewModel
    private lateinit var tvUser_profile: TextView
    private lateinit var tvName_profile: TextView
    private lateinit var tvEmail_profile: TextView
    private lateinit var tvPassword_profile: TextView

    private lateinit var btnGetUsers_profile: ImageButton
    private lateinit var btnGetPets_profile: ImageButton
    private lateinit var btnUpdate_profile: ImageButton
    private lateinit var btnDelete_profile: ImageButton
    private lateinit var btnEye_profile: ImageButton

    private lateinit var llBtnLogOut_profile: View
    private lateinit var llBtnAdmin_profile: View


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_profile)

        viewModel = ViewModelProvider(this).get(ProfileViewModel::class.java)

        //Componentes
        //Text View
        tvUser_profile = findViewById(R.id.tvUser_profile)
        tvName_profile = findViewById(R.id.tvName_profile)
        tvEmail_profile = findViewById(R.id.tvEmail_profile)
        tvPassword_profile = findViewById(R.id.tvPassword_profile)

        //Botões
        btnGetUsers_profile = findViewById(R.id.btnGetUsers_profile)
        btnGetPets_profile = findViewById(R.id.btnGetPets_profile)
        btnUpdate_profile = findViewById(R.id.btnUpdate_profile)
        btnDelete_profile = findViewById(R.id.btnDelete_profile)

        llBtnLogOut_profile = findViewById(R.id.llBtnLogOut_profile)
        llBtnAdmin_profile = findViewById(R.id.llBtnAdmin_profile)

        btnEye_profile = findViewById(R.id.btnEye_profile)

        //Observador
        setupObservers()

        //Eventos
        var idUser = ""

        //Buscar dados
        val token = intent.getStringExtra("USER_TOKEN")
        if (token != null) {
            try {
                //Pegar o id do token
                val parts = token.split(".")
                if (parts.size == 3) {
                    val payload = String(Base64.decode(parts[1], Base64.DEFAULT))
                    val jsonObject = JSONObject(payload)

                    idUser = jsonObject.getString("id")
                    viewModel.profile(token, idUser)
                }
            } catch (e: Exception) {
                out()
            }
        } else {
            out()
        }

        //Visualizar usuários
        btnGetUsers_profile.setOnClickListener {
            val intent = Intent(this, UsersManagementActivity::class.java)
            intent.putExtra("USER_TOKEN", token)
            startActivity(intent)
        }

        //Visualizar pets
        btnGetPets_profile.setOnClickListener {
            val intent = Intent(this, AnimalManagementActivity::class.java)
            startActivity(intent)
        }

        //Atualizar usuário
        btnUpdate_profile.setOnClickListener {
            val intent = Intent(this, UpdateActivity::class.java)
            startActivity(intent)
        }

        //Deletar usuário
        btnDelete_profile.setOnClickListener {
            if (token !=null){
                viewModel.delete(token, idUser)
            }
        }

        //Sair
        llBtnLogOut_profile.setOnClickListener {
            out()
        }

        //Pedir para se admin
        llBtnAdmin_profile.setOnClickListener {
            //tela
            /*
            * val intent = Intent(this, nome da class::class.java)
            startActivity(intent)
            finish()
            * */
        }

        //Olho Da senha
        btnEye_profile.setOnClickListener {

        }
    }

    private fun out(){
        val intent = Intent(this, HomeActivity::class.java)
        intent.putExtra("USER_TOKEN", "")
        startActivity(intent)
        finish()
    }

    private fun setupObservers() {
        viewModel.state.observe(this) { state ->
            when (state) {

                is ProfileState.Loading -> {
                    btnDelete_profile.isEnabled = false
                    btnUpdate_profile.isEnabled = false
                    btnGetPets_profile.isEnabled = false
                    btnGetUsers_profile.isEnabled = false
                    llBtnLogOut_profile.isEnabled = false
                }

                is ProfileState.DadosGet -> {
                    tvUser_profile.setText(state.dados.user)
                    tvName_profile.setText(state.dados.name)
                    tvEmail_profile.setText(state.dados.email)
                    tvPassword_profile.setText(state.dados.password)

                    if (state.dados.admin == false){
                        btnGetUsers_profile.visibility = View.GONE
                        btnDelete_profile.visibility = View.VISIBLE
                        llBtnAdmin_profile.setBackgroundResource(R.drawable.bg_btn_orange)
                        llBtnAdmin_profile.isEnabled = true
                    }else{
                        btnDelete_profile.visibility = View.GONE
                        btnGetUsers_profile.visibility = View.VISIBLE
                        llBtnAdmin_profile.setBackgroundResource(R.drawable.bg_btn_blue)
                        llBtnAdmin_profile.isEnabled = false
                    }
                }

                is ProfileState.Delete -> {
                    var menssage: String = state.delete.mensage ?: "Usuário deletado com sucesso"
                    Toast.makeText(this, menssage, Toast.LENGTH_SHORT).show()

                    //Outra pagina
                    lifecycleScope.launch{
                        delay(1500)
                        val intent = Intent(this@ProfileActivity, HomeActivity::class.java)
                        startActivity(intent)
                        finish()
                    }
                }
                is LoginState.Error -> {//Se der erro
                    btnDelete_profile.isEnabled = true
                    btnUpdate_profile.isEnabled = true
                    btnGetPets_profile.isEnabled = true
                    btnGetUsers_profile.isEnabled = true
                    llBtnLogOut_profile.isEnabled = true
                    Toast.makeText(this, state.message, Toast.LENGTH_SHORT).show()
                }
                else -> {}
            }
        }
    }
}