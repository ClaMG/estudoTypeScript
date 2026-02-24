package com.example.android.ui.user.profile

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.ImageButton
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.android.R
import com.example.android.ui.animal.byAll.AnimalManagementActivity
import com.example.android.ui.user.users.UsersManagementActivity
import com.example.android.ui.user.home.HomeActivity
import com.example.android.ui.user.update.UpdateActivity

class ProfileActivity : AppCompatActivity() {

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


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_profile)


        //Componentes
        tvUser_profile = findViewById(R.id.tvUser_profile)
        tvName_profile = findViewById(R.id.tvName_profile)
        tvEmail_profile = findViewById(R.id.tvEmail_profile)
        tvPassword_profile = findViewById(R.id.tvPassword_profile)

        btnGetUsers_profile = findViewById(R.id.btnGetUsers_profile)
        btnGetPets_profile = findViewById(R.id.btnGetPets_profile)
        btnUpdate_profile = findViewById(R.id.btnUpdate_profile)
        btnDelete_profile = findViewById(R.id.btnDelete_profile)

        llBtnLogOut_profile = findViewById(R.id.llBtnLogOut_profile)

        btnEye_profile = findViewById(R.id.btnEye_profile)


        //Eventos

        //Buscar dados
        val token = intent.getStringExtra("USER_TOKEN")
        if (token != null) {
            //conferir token
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

        //atualizar usuário
        btnUpdate_profile.setOnClickListener {
            val intent = Intent(this, UpdateActivity::class.java)
            startActivity(intent)
        }

        //deletar usuário
        btnDelete_profile.setOnClickListener {
            //logica para deletar
        }

        //Sair
        llBtnLogOut_profile.setOnClickListener {
            out()
        }

        btnEye_profile.setOnClickListener {
            //Logica do olho
        }


    }

    private fun out(){
        val intent = Intent(this, HomeActivity::class.java)
        intent.putExtra("USER_TOKEN", "")
        startActivity(intent)
        finish()
    }
}