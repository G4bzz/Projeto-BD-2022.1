import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import styles from "./telaListagemCSS"
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';

import axios from 'axios';




function TelaListagem({ route, navigation }) {

  const [label, setLabel] = useState('');
  const mat = route.params.mat;
 
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

  return (

    <SafeAreaView style={styles.container}>
      <FlatList style={styles.lista}
        data={label}
        keyExtractor={(item) => item.id_evento}
        renderItem={({ item }) =>
          <View style={styles.containerEventos}>
            <Text
              onPress={() => navigation.navigate("Detalhes", {evento:{item},matricula:mat})}
              style={styles.titleEventos}> {item.titulo}
            </Text>
          </View>

        }
      />
      <View style={styles.viewBotao}>

        <TouchableOpacity
          onPress={() => navigation.navigate("Adicao", {mat})}
          style={styles.botao}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>

  )


}

export default TelaListagem;