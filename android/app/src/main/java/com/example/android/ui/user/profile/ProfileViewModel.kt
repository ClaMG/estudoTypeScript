package com.example.android.ui.user.profile

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.android.dominio.model.Mensage
import com.example.android.dominio.model.User
import com.example.android.dominio.useCase.user.UserByIdUserCase
import com.example.android.dominio.useCase.user.UserDeleteUserCase
import com.example.android.ui.user.login.LoginState
import kotlinx.coroutines.launch


//Estados
sealed class ProfileState {
    object Idle : ProfileState() // Inicial
    object Loading : ProfileState() // Carregando
    data class DadosGet(val dados: User) : ProfileState()
    data class Delete(val delete: Mensage): ProfileState()
    data class Error(val message: String) : ProfileState() // Erro
}

class ProfileViewModel (private val byIdUserCase: UserByIdUserCase, private val deleteUserCase: UserDeleteUserCase): ViewModel(){
    private val _state = MutableLiveData<ProfileState>(ProfileState.Idle)
    //Estado Público (para ser observado pela activity)
    val state: LiveData<ProfileState> = _state

    fun profile(token: String, idUser: String ){
        _state.value = ProfileState.Loading

        viewModelScope.launch{
            val result = byIdUserCase.execute(token, idUser)

            result.onSuccess { profileData ->
                _state.value = ProfileState.DadosGet(profileData)
            }

            result.onFailure { exception ->
                _state.value = ProfileState.Error(exception.message ?: "Erro desconhecido")
            }
        }
    }

    fun delete(token: String, idUser: String){
        _state.value = ProfileState.Loading

        viewModelScope.launch{
            val result = deleteUserCase.execute(token, idUser)

            result.onSuccess { DeleteData ->
                _state.value = ProfileState.Delete(DeleteData)
            }

            result.onFailure { exception ->
                _state.value = ProfileState.Error(exception.message ?: "Erro desconhecido")
            }
        }
    }

}