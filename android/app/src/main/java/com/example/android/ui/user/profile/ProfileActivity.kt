package com.example.android.ui.user.profile

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.ImageButton
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.android.R
import com.example.android.ui.user.byAll.UsersManagementActivity
import com.example.android.ui.user.home.HomeActivity

class ProfileActivity : AppCompatActivity() {

    private lateinit var tvUser_profile: TextView
    private lateinit var tvName_profile: TextView
    private lateinit var tvEmail_profile: TextView
    private lateinit var tvPassword_profile: TextView

    private lateinit var btnGetUsers_profile: ImageButton
    private lateinit var btnGetPets_profile: ImageButton
    private lateinit var btnUpdate_profile: ImageButton
    private lateinit var btnDelete_profile: ImageButton

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


        //Eventos
        btnGetUsers_profile.setOnClickListener {
            val intent = Intent(this, UsersManagementActivity::class.java)
            startActivity(intent)
        }

        btnGetPets_profile.setOnClickListener {

        }

        btnUpdate_profile.setOnClickListener {

        }

        btnDelete_profile.setOnClickListener {

        }

        llBtnLogOut_profile.setOnClickListener {
            val intent = Intent(this, HomeActivity::class.java)
            startActivity(intent)
        }


    }
}