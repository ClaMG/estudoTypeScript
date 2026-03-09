package com.example.android.ui.user.create

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.android.dominio.model.Mensage
import com.example.android.dominio.useCase.user.UserCreateUserCase
import com.example.android.dominio.util.isValidEmail
import kotlinx.coroutines.launch

sealed class CreateState{
    object Idle : CreateState() //Inicial
    object Loading : CreateState() // Carregando
    data class Success(val create: Mensage) : CreateState() // Sucesso
    data class Error(val message: String) : CreateState() // Erro
}

class CreateViewModel (private val createUserCase: UserCreateUserCase): ViewModel(){

    private val _state = MutableLiveData<CreateState>(CreateState.Idle)
    val state: LiveData<CreateState> = _state

    fun create(user: String, name: String, email: String, password: String, passwordRepeat: String){
        _state.value = CreateState.Loading

        viewModelScope.launch{

            if (password != passwordRepeat){
                _state.value = CreateState.Error("A senha deve ser a mesma no campo de repetir senha")
            }
            if (email.isValidEmail()) {
                _state.value = CreateState.Error("Fomato incorreto de email, adicione @ e .com")
            }

            val result = createUserCase.execute(user, name, email, password)

            result.onSuccess { createData ->
                _state.value = CreateState.Success(createData)
            }

            result.onFailure { exception ->
                _state.value = CreateState.Error(exception.message ?: "Erro desconhecido")
            }
        }

    }




}