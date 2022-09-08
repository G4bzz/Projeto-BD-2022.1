import React from "react";
import {View, Text,FlatList,SafeAreaView,TouchableOpacity,Button,TextInput,useState} from "react-native";
import {NavigationContainer, useRoute} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import listagemCSS from "./telalistagemCSS";
import detalhesCSS from "./telaDetalhesdetalhesCSS";
import adicaoCSS from "./telaAdicaoCSS";

const Eventos = [];
const Pilha = createStackNavigator();


function TelaDetalhes({route,navigation}){

  const item = route.params.item;
  
	return(
		<View>
			<View style={detalhesCSS.header}>
				<Text style={detalhesCSS.h1}>{item.nome}</Text>
			</View>
			<View style={detalhesCSS.container}>
				<View style={detalhesCSS.boxList}>
					<FlatList data={[
						{key: ['Descrição: ', item.desc]},
						{key: ['Local: ', item.local]},
						{key: ['Data: ', item.data]},
						{key: ['Horário: ', item.hora]},
						{key: ['Enviado por: ', item.autor]},
						{key: ['Contato: ', item.cont]}
					]} renderItem={({item}) => <Text style={detalhesCSS.listItems}><Text style={{fontWeight: 'bold'}}>{item.key[0]}</Text>{item.key[1]}</Text>}/>
				</View>
			</View>
		</View>
	)
}


function TelaAdicao({navigation}) {
    const [textoNome, onChangeTextNome] = React.useState("")
    const [textoLocal, onChangeTextLocal] = React.useState("")
    const [textoData, onChangeTextData] = React.useState("")
    const [textoHorario, onChangeTextHora] = React.useState("")
    const [textoAutor, onChangeTextAutor] = React.useState("")
    const [textoContato, onChangeTextContato] = React.useState("")
    const [textoDesc, onChangeTextDesc] = React.useState("")

    let info = new Object();
    info.nome = textoNome;
    info.loc = textoLocal;
    info.data = textoData;
    info.hora = textoHorario;
    info.aut = textoAutor;
    info.cont = textoContato;
    info.desc = textoDesc;

    return(
        <View > 
            <Text style={adicaoCSS.formLabel}>Insira os dados do evento</Text>
            <View>
                <Text>Nome: </Text> 
                <TextInput
                    maxLength = {36}
                    style={adicaoCSS.formTextInput}
                    value = {textoNome}
                    onChangeText={onChangeTextNome}
                    placeholder="Calourada de Psicologia"
                />

                <Text>Local: </Text> 
                <TextInput
                    maxLength = {36}
                    style={adicaoCSS.formTextInput}
                    value = {textoLocal}
                    onChangeText={onChangeTextLocal}
                    placeholder="Ex: Didática 1"
                />
                
                <Text>
                    Data:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={adicaoCSS.formTextInput}
                    value = {textoData}
                    onChangeText={onChangeTextData}
                    placeholder="09/09/2022"
                />
                <Text>
                    Horário:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={adicaoCSS.formTextInput}
                    value = {textoHorario}
                    onChangeText={onChangeTextHora}
                    placeholder="Ex: 12:00"
                />
                <Text>
                    Autor:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={adicaoCSS.formTextInput}
                    value = {textoAutor}
                    onChangeText={onChangeTextAutor}
                    placeholder="Ex: Jorge do bolo"
                />
                <Text>
                    Descrição:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={adicaoCSS.formTextInput}
                    value = {textoDesc}
                    onChangeText={onChangeTextDesc}
                    placeholder="Descreva o evento"
                />
                <Text>
                    Insira uma forma de contato:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={adicaoCSS.formTextInput}
                    value = {textoContato}
                    onChangeText={onChangeTextContato}
                    placeholder="Ex: e-mail, telefone, instagram, etc"
                />

                <TouchableOpacity
                    style={adicaoCSS.textButtonCadastrar}
                    onPress={() => navigation.navigate({name:"Listagem",params:{nome:textoNome,local:textoLocal,data:textoData,hora:textoHorario,autor:textoAutor,desc:textoDesc,cont:textoContato},merge:true})}
                >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}



function TelaListagem({route,navigation}) {

  
  let tamanho = Eventos.length;
  let info = new Object();
  info.id = tamanho + 1;
  info.nome = route.params?.nome;
  info.desc = route.params?.desc;
  info.local = route.params?.local;
  info.data = route.params?.data;
  info.hora = route.params?.hora;
  info.autor = route.params?.autor;
  info.cont = route.params?.cont;

  if (info.nome === undefined) {}
  else {Eventos.push(info);}

  return(

<SafeAreaView style = {listagemCSS.container}>

  <FlatList style = {listagemCSS.lista}
  data = {Eventos}
  keyExtractor = {(item) => item.id}
  renderItem = {({item}) => 
    <View style = {listagemCSS.containerEventos}>
        <Text 
        onPress = {() => navigation.navigate("Detalhes",{item})} 
        style = {listagemCSS.titleEventos}> {item.nome} 
        </Text>
    </View>

  }
  />
  <View style = {listagemCSS.viewBotao}>

  <TouchableOpacity
          onPress = {() => navigation.navigate("Adicao")}
          style={listagemCSS.botao}>
          <Text style = {listagemCSS.textoBotao}>+</Text>
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

        </Pilha.Navigator>

		</NavigationContainer>

	);  
  

}
