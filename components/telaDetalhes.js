import React from 'react'
import {View,Text,FlatList,TouchableOpacity,TextInput} from 'react-native'
import styles from "./telaDetalhesCSS"

function TelaDetalhes({route,navigation}){

    const item = route.params.item;
    const [textoComentario, onChangeTextComentario] = React.useState("")
    const comment = new Object();
    comment.texto = textoComentario;

    const data = item.datainicio.slice(8,10) + "/" + item.datainicio.slice(5,7)+ "/" + item.datainicio.slice(0,4);
    const horario = item.datainicio.slice(12,16);
    const idEvento = item.id_evento;
    
      return(
          <View style = {styles.containerPai}>
              <View style = {styles.header}>
                  <Text style={styles.h1}>{item.titulo}</Text>
              </View>
              <View style={styles.container}>
                  <View style={styles.boxList}>
                      <FlatList data={[
                          {key: ['Descrição: ', item.descricao]},
                          {key: ['Local: ', item.local]},
                          {key: ['Data: ', data]},
                          {key: ['Horário: ', horario]},
                          {key: ['Enviado por: ', item.mat_criador]},
                          {key: ['Contato: ', item.cont]}
                      ]} renderItem={({item}) => <Text style={styles.listItems}><Text style={{fontWeight: 'bold'}}>{item.key[0]}</Text>{item.key[1]}</Text>}/>
                  </View>
              </View>
              <TextInput 
                style = {styles.comentario}
                maxLength = {300}
                value = {textoComentario}
                onChangeText={onChangeTextComentario}
                placeholder="Adicione um comentário"
              />
                  <TouchableOpacity
                      style={styles.textButtonCadastrar}
                      onPress={()=> navigation.navigate({name:"Comentarios",params:{texto: textoComentario, id : idEvento},merge:true},onChangeTextComentario(""))}

                  >
                      <Text>Adicionar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={styles.textButtonCadastrar}
                      onPress={()=> navigation.navigate({name:"Comentarios",params:{id:idEvento},merge:true},onChangeTextComentario(""))}
                  >
                      <Text>Ver Comentários</Text>
                  </TouchableOpacity>
      </View>
      )
  }


export default TelaDetalhes;