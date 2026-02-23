package com.example.android.ui.animal.byAll

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.ImageButton
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.recyclerview.widget.RecyclerView
import com.example.android.R
import com.example.android.ui.user.profile.ProfileActivity

class AnimalManagementActivity : AppCompatActivity() {

    private lateinit var btnBack_animals: ImageButton
    private lateinit var rvAnimals: RecyclerView
    private lateinit var llBtnAdd_animals: View


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_animal)

        //Componentes
        btnBack_animals = findViewById(R.id.btnBack_animals)
        rvAnimals = findViewById(R.id.rvAnimals)
        llBtnAdd_animals = findViewById(R.id.llBtnAdd_animals)

        //Eventos
        btnBack_animals.setOnClickListener {
            val intent = Intent(this, ProfileActivity::class.java)
            startActivity(intent)
        }

        llBtnAdd_animals.setOnClickListener {

        }



    }
}