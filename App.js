import React from "react";
import {NavigationContainer, useRoute} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import TelaListagem from "./components/eventos/telaListagem";
import TelaAdicao from "./components/eventos/telaAdicao";
import TelaDetalhes from "./components/eventos/telaDetalhesEvento";
import TelaComentarios from "./components/comentarios/telaListaComentarios";
import TelaLogin from "./components/usuarios/telaLogin"
import TelaCadastro from "./components/usuarios/telaCadastroUsuario"
import TelaPrincipal from "./components/usuarios/telaPrincipal";
import TelaListaUsuario from "./components/usuarios/telaListaUsuario"
import TelaDeletaUsuario from "./components/usuarios/telaDeletaUsuario";
import TelaAtualizaUsuario from "./components/usuarios/telaAtualizaUsuario"
import TelaDetalhesUsuario from "./components/usuarios/telaDetalhesUsuario";
import TelaAtualizaComentario from "./components/comentarios/telaAtualizaComentario"
import TelaDeletaComentario from "./components/comentarios/telaDeletaComentario"
import TelaAdicionaComentario from "./components/comentarios/telaAdicaoComentario"
import TelaAttEvento from "./components/eventos/telaAttEvento";
   


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
              name = "AtualizaEvento"
              component = {TelaAttEvento}
              options = {
              {title: "Atualizar evento", // Titulo da janela
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
              name = "AdicionaComentario"
              component = {TelaAdicionaComentario}
              options = {
              {title: "Adicionar comentários do evento", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "AtualizaComentario"
              component = {TelaAtualizaComentario}
              options = {
              {title: "Atualizar comentários do evento", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

            <Pilha.Screen
              name = "DeletaComentario"
              component = {TelaDeletaComentario}
              options = {
              {title: "Deletar comentários do evento", // Titulo da janela
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