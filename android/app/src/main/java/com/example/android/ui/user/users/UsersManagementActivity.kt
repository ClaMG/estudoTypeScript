package com.example.android.ui.user.users

import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.ImageButton
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import com.example.android.R

class UsersManagementActivity : AppCompatActivity() {

    private lateinit var txSearchBar_users: EditText
    private lateinit var btnSearch_users: ImageButton
    private lateinit var rvUsers: RecyclerView
    private lateinit var llBtnAdd_users: View

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_users_management)

        //Componentes
        txSearchBar_users = findViewById(R.id.txSearchBar_users)
        btnSearch_users = findViewById(R.id.btnSearch_users)
        rvUsers = findViewById(R.id.rvUsers)
        llBtnAdd_users = findViewById(R.id.llBtnAdd_users)

        //Eventos
        btnSearch_users.setOnClickListener {

        }

        llBtnAdd_users.setOnClickListener {

        }

    }
}