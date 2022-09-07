import React from "react";
import {View, Text,FlatList,SafeAreaView,TouchableOpacity,Button} from "react-native";
import {NavigationContainer, useRoute} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import styles from "./Estilos";
import Css from "./telaDetalhes";


const Pilha = createStackNavigator();


function telaDetalhes({route,navigation}){

  const item = route.params.item;
  
	return(
		<View>
			<View style={Css.header}>
				<Text style={Css.h1}>{item.nome}</Text>
			</View>
			<View style={Css.container}>
				<View style={Css.boxList}>
					<FlatList data={[
						{key: ['Descrição: ', item.desc]},
						{key: ['Local: ', item.local]},
						{key: ['Data: ', item.data]},
						{key: ['Horário: ', item.hora]},
						{key: ['Enviado por: ', item.autor]},
						{key: ['Contato: ', item.cont]}
					]} renderItem={({item}) => <Text style={Css.listItems}><Text style={{fontWeight: 'bold'}}>{item.key[0]}</Text>{item.key[1]}</Text>}/>
				</View>
			</View>
				<View style={Css.button}>
					<Button 
						title='Voltar'
            onPress = {() => navigation.navigate("Listagem")}
						color='#88B2CC'
						accessibilityLabel='Retornar para a tela principal.'
						/>
				</View>
		</View>
	)
}

function TelaListagem({navigation}) {

  const Eventos = [
    {id: "1", nome : "Evento 1",desc:"Calourada de sexologia",local:"DCE",data:"09/09/2022",hora:"19:00",autor:"Biel da Faixa",cont:"Descubra"},
    {id: "2", nome : "Evento 2"},
    {id: "3", nome : "Evento 3"},
    {id: "4", nome : "Evento 4"},
    {id: "5", nome : "Evento 5"},
    {id: "6", nome : "Evento 6"},
    {id: "7", nome : "Evento 7"},
    {id: "8", nome : "Evento 8"},
    {id: "9", nome : "Evento 9"},
    {id: "10", nome : "Evento 10"}
  ]

  return(

<SafeAreaView style = {styles.container}>

  <FlatList style = {styles.lista}
  data = {Eventos}
  keyExtractor = {(item) => item.id}
  renderItem = {({item}) => 
    <View style = {styles.containerEventos}>
        <Text 
        onPress = {() => navigation.navigate("Detalhes",{item})} 
        style = {styles.titleEventos}> {item.nome} 
        </Text>
    </View>

  }
  />
  <View style = {styles.viewBotao}>

  <TouchableOpacity
          style={styles.botao}>
          <Text style = {styles.textoBotao}>+</Text>
  </TouchableOpacity>

  </View>

</SafeAreaView>

)


}

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
              component = {telaDetalhes}
              options = {
			{title: "Detalhes do evento", // Titulo da janela
			 headerStyle: {backgroundColor:"#008"}, //cor da barra inicial
			 headerTintColor: "#fff",
       headerTitleAlign: "center" //formata a cor do texto do titulo
      }}
            />

        </Pilha.Navigator>

		</NavigationContainer>

	);  
  

}
