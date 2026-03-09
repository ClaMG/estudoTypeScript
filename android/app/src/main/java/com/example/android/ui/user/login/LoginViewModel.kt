package com.example.android.ui.user.login

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.android.dominio.model.Login
import com.example.android.dominio.useCase.user.UserLoginUseCase
import kotlinx.coroutines.launch


//Estados
sealed class LoginState {
    object Idle : LoginState() // Inicial
    object Loading : LoginState() // Carregando
    data class Success(val login: Login) : LoginState() // Sucesso
    data class Error(val message: String) : LoginState() // Erro
}

class LoginViewModel(private val loginUseCase: UserLoginUseCase): ViewModel() {

    //Estado Privado
    private val _state = MutableLiveData<LoginState>(LoginState.Idle)
    //Estado Público (para ser observado pela activity)
    val state: LiveData<LoginState> = _state

    fun logar(user: String, password: String){
        _state.value = LoginState.Loading//Carregando

        //A função excuta em segundo plano, se a tela for fechada a função para
        viewModelScope.launch {
            //Manda para o userCase
            val result = loginUseCase.execute(user, password)

            //Se foi sucesso ou erro
            result.onSuccess { loginData ->
                _state.value = LoginState.Success(loginData)
            }

            result.onFailure { exception ->
                _state.value = LoginState.Error(exception.message ?: "Erro desconhecido")
            }
        }

    }

}