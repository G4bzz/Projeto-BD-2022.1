import {Text,View,TouchableOpacity ,Alert} from 'react-native'
import styles from "./telaPrincipalCSS"
import React from 'react';

function TelaPrincipal({navigation}) {
    
    return(
    <View style={styles.container}>
    
     <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}>
        <Text style = {styles.textoBotao}>Fazer Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Cadastro")}>
        <Text style = {styles.textoBotao}>Cadastrar usuário</Text>
      </TouchableOpacity> 

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("ListarUsuarios")}>
        <Text style = {styles.textoBotao}>Listar usuários</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("AtualizarUsuario")}>
        <Text style = {styles.textoBotao}>Atualizar usuário</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("DeletarUsuario")}>
        <Text style = {styles.textoBotao}>Deletar usuário</Text>
      </TouchableOpacity>   
   
    </View>
    );
}


export default TelaPrincipal;