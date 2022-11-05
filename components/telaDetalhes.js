import React from 'react'
import {View,Text,FlatList,TouchableOpacity,TextInput} from 'react-native'
import styles from "./telaDetalhesCSS"

function TelaDetalhes({route,navigation}){

    const item = route.params.item;
    const [textoComentario, onChangeTextComentario] = React.useState("")
    const comment = new Object();
    comment.texto = textoComentario;
    
    const idEvento = item.id;
    
      return(
          <View style = {styles.containerPai}>
              <View style = {styles.header}>
                  <Text style={styles.h1}>{item.nome}</Text>
              </View>
              <View style={styles.container}>
                  <View style={styles.boxList}>
                      <FlatList data={[
                          {key: ['Descrição: ', item.desc]},
                          {key: ['Local: ', item.local]},
                          {key: ['Data: ', item.data]},
                          {key: ['Horário: ', item.hora]},
                          {key: ['Enviado por: ', item.autor]},
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