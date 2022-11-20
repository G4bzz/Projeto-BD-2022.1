import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import styles from "./telaListagemCSS"
import React from 'react';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';
import axios from 'axios';
import { set } from 'react-native-reanimated';




function TelaListagem({ route, navigation }) {

  const [label, setLabel] = useState('');
  const matricula = route.params.matricula;


  const getEvents = () => {
    axios
      .get(`${baseURL}/events`)
      .then(function (response) {
        //here you put the function to obtain the response.data
        //setLabel is just an example;
        setLabel((response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        //alert('Finally called');
      });
  };

  useEffect(() => {
    getEvents();
  }, [route]);

  console.log(matricula);


  return (

    <SafeAreaView style={styles.container}>
      <FlatList style={styles.lista}
        data={label}
        keyExtractor={(item) => item.id_evento}
        renderItem={({ item }) =>
          <View style={styles.containerEventos}>
            <Text
              onPress={() => navigation.navigate("Detalhes", {evento:{item},matricula: { matricula }})}
              style={styles.titleEventos}> {item.titulo}
            </Text>
          </View>

        }
      />
      <View style={styles.viewBotao}>

        <TouchableOpacity
          onPress={() => navigation.navigate("Adicao", {matricula:matricula })}
          style={styles.botao}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>

  )


}

export default TelaListagem;