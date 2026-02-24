package com.example.android.ui.animal.update

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

class UpdateAnimalActivity : AppCompatActivity() {

    private lateinit var btnUpdate_update_pet: Button

    private lateinit var txName_update_pet: EditText
    private lateinit var txAge_update_pet: EditText
    private lateinit var txSpecies_update_pet: EditText
    private lateinit var txGender_update_pet: EditText

    private lateinit var btnBack_petUpdate: ImageButton
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_update_animal)

        //Componentes
        btnBack_petUpdate = findViewById(R.id.btnBack_petUpdate)
        txName_update_pet = findViewById(R.id.txName_update_pet)
        txAge_update_pet = findViewById(R.id.txAge_update_pet)
        txSpecies_update_pet = findViewById(R.id.txSpecies_update_pet)
        txGender_update_pet = findViewById(R.id.txGender_update_pet)
        btnUpdate_update_pet = findViewById(R.id.btnUpdate_update_pet)

        //Eventos
        btnBack_petUpdate.setOnClickListener {
            val intent = Intent(this, AnimalManagementActivity::class.java)
            startActivity(intent)
        }

        btnUpdate_update_pet.setOnClickListener {

        }

    }
}