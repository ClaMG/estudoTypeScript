package com.example.android.ui.animal.create

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ImageButton
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.android.R
import com.example.android.ui.animal.byAll.AnimalManagementActivity

class CreateAnimalActivity : AppCompatActivity() {

    private lateinit var btnBack_create_pet: ImageButton

    private lateinit var txName_create_pet: EditText
    private lateinit var txAge_create_pet: EditText
    private lateinit var txSpecies_create_pet: EditText
    private lateinit var txGender_create_pet: EditText

    private lateinit var btnRegister_create_pet: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_create_animal)

        //Componentes
        btnBack_create_pet = findViewById(R.id.btnBack_create_pet)

        txName_create_pet = findViewById(R.id.txName_create_pet)
        txAge_create_pet = findViewById(R.id.txAge_create_pet)
        txSpecies_create_pet = findViewById(R.id.txSpecies_create_pet)
        txGender_create_pet = findViewById(R.id.txGender_create_pet)

        btnRegister_create_pet = findViewById(R.id.btnRegister_create_pet)

        //Eventos
        btnBack_create_pet.setOnClickListener {
            val intent = Intent(this, AnimalManagementActivity::class.java)
            startActivity(intent)
        }

        btnRegister_create_pet.setOnClickListener {

        }
    }
}