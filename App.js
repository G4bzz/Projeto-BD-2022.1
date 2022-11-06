import React from "react";
import {NavigationContainer, useRoute} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import TelaListagem from "./components/View/telaListagem";
import TelaAdicao from "./components/View/telaAdicao";
import TelaDetalhes from "./components/View/telaDetalhes";
import TelaComentarios from "./components/View/telaComentarios";


const Pilha = createStackNavigator();




export default function App() {

  return(

		<NavigationContainer>
      
        <Pilha.Navigator initialRouteName="telaListagem"> 
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
              {title: "Comentarios do evento", // Titulo da janela
              headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
              headerTintColor: "#fff",
              headerTitleAlign: "center" //formata a cor do texto do titulo
              }}
            />

        </Pilha.Navigator>

		</NavigationContainer>

	);  
  

}