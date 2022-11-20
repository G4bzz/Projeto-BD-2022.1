import {View,Text,TouchableOpacity,SafeAreaView,FlatList} from 'react-native'
import styles from "./telaListaUsuarioCSS"
import {useEffect,useState} from "react"
import React from 'react'
import axios from 'axios'
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';

function TelaListaUsuario({navigation}) {
 
    const [users, setUsers] = useState('');
  
    useEffect(() => {
        getUsers();
    },[])

    const getUsers = () => {
    axios
      .get(`${baseURL}/users`)
      .then(function (response) {
        //here you put the function to obtain the response.data
        //setLabel is just an example;
        setUsers(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        //alert('Finally called');
      });
  };

    return(
  
  <SafeAreaView style = {styles.container}>
    <FlatList style = {styles.lista}
    data = {users}
    keyExtractor = {(item) => item.matricula}
    renderItem = {({item}) => 
      <View style = {styles.containerEventos}>
          <Text 
          onPress = {() => navigation.navigate("DetalhesUsuarios",{item})} 
          style = {styles.titleEventos}> {item.primeironome} 
          </Text>
      </View>
  
    }
    />
    <View style = {styles.viewBotao}>
    <TouchableOpacity
            onPress = {() => navigation.goBack()}
            style={styles.botao}>
            <Text style = {styles.textoBotao}>Voltar</Text>
    </TouchableOpacity>
  
    </View>
  
  </SafeAreaView> 
  
  )
  
  
  }

  export default TelaListaUsuario;