import React from 'react'
import {View,SafeAreaView,FlatList,Text} from 'react-native'
import styles from "./telaComentariosCSS"

const Comentarios = []

function TelaComentarios({route}){
    const comentario = route.params?.texto;
    const idEvent = route.params?.id;

    if (Comentarios.length === 0) {
      Comentarios.push([comentario])
    }

    else if (typeof comentario === 'undefined') {}

    else if (typeof Comentarios[idEvent] === 'undefined') {
      Comentarios.push([comentario])
    }

    else {
      Comentarios[idEvent].push(comentario)
    }
    


    return(
    <SafeAreaView style = {styles.container}>
  
      <FlatList style = {styles.lista}
      data = {Comentarios[idEvent]}
      renderItem = {({item}) => 
        <View style = {styles.containerEventos}>
            <Text
             style = {styles.titleEventos}> {item}
            </Text>
        </View>
  
      }
      />
    </SafeAreaView>
    );
  }
  

  export default TelaComentarios;