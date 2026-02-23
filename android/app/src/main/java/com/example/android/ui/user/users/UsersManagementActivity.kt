package com.example.android.ui.user.users

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.ImageButton
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import com.example.android.R
import com.example.android.ui.user.profile.ProfileActivity
import com.example.android.ui.user.update.UpdateActivity

class UsersManagementActivity : AppCompatActivity() {

    private lateinit var txSearchBar_users: EditText
    private lateinit var btnSearch_users: ImageButton
    private lateinit var btnBack_users: ImageButton
    private lateinit var rvUsers: RecyclerView
    private lateinit var llBtnAdd_users: View

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_users_management)

        //Componentes
        txSearchBar_users = findViewById(R.id.txSearchBar_users)

        btnSearch_users = findViewById(R.id.btnSearch_users)
        btnBack_users = findViewById(R.id.btnBack_users)
        llBtnAdd_users = findViewById(R.id.llBtnAdd_users)

        rvUsers = findViewById(R.id.rvUsers)

        //Eventos
        btnBack_users.setOnClickListener{
            val intent = Intent(this, ProfileActivity::class.java)
            startActivity(intent)
        }

        btnSearch_users.setOnClickListener {

        }

        llBtnAdd_users.setOnClickListener {

        }

    }
}