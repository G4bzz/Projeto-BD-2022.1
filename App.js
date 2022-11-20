import React from "react";
import {NavigationContainer, useRoute} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import TelaListagem from "./components/telaListagem";
import TelaAdicao from "./components/telaAdicao";
import TelaDetalhes from "./components/telaDetalhes";
import TelaComentarios from "./components/telaComentarios";
import TelaLogin from "./components/telaLogin"
import TelaCadastro from "./components/telaCadastro"
import TelaPrincipal from "./components/telaPrincipal";
import TelaListaUsuario from "./components/telaListaUsuario"
import TelaDeletaUsuario from "./components/telaDeletaUsuario";
import TelaAtualizaUsuario from "./components/telaAtualizaUsuario"
import TelaDetalhesUsuario from "./components/telaDetalhesUsuario";
import TelaAttEvento from "./components/telaAttEvento"


const Pilha = createStackNavigator();




export default function App() {

  return(

		<NavigationContainer>
      
        <Pilha.Navigator initialRouteName="Principal"> 

            <Pilha.Screen
              name = "Login"
              component = {TelaLogin}
              options = {
              {title: "Tela de Login", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "ListarUsuarios"
              component = {TelaListaUsuario}
              options = {
              {title: "Usuários", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "DetalhesUsuarios"
              component = {TelaDetalhesUsuario}
              options = {
              {title: "Detalhes do Usuário", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />
            
            <Pilha.Screen
              name = "DeletarUsuario"
              component = {TelaDeletaUsuario}
              options = {
              {title: "Deletar usuário", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "AtualizarUsuario"
              component = {TelaAtualizaUsuario}
              options = {
              {title: "Atualizar Usuário", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />
            <Pilha.Screen
              name = "Principal"
              component = {TelaPrincipal}
              options = {
              {title: "Tela Principal", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "Listagem"
              component = {TelaListagem}
              options = {
              {title: "Listagem de Eventos", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "Detalhes"
              component = {TelaDetalhes}
              options = {
              {title: "Detalhes do evento", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "Adicao"
              component = {TelaAdicao}
              options = {
              {title: "Novo evento", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />
            <Pilha.Screen
              name = "AtualizarEvento"
              component = {TelaAttEvento}
              options = {
              {title: "Novo evento", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "Comentarios"
              component = {TelaComentarios}
              options = {
              {title: "Comentários do evento", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "Cadastro"
              component = {TelaCadastro}
              options = {
              {title: "Cadastro de usuário", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

        </Pilha.Navigator>

		</NavigationContainer>

	);  
  

}