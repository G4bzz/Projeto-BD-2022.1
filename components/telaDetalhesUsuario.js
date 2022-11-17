import React from 'react'
import {View,Text,FlatList,} from 'react-native'
import styles from "./telaDetalhesUsuarioCSS"

function TelaDetalhesUsuario({route}){

    const item = route.params.item;
    
      return(
          <View style = {styles.containerPai}>
              <View style={styles.container}>
                  <View style={styles.boxList}>
                      <FlatList data={[
                          {key: ['Matrícula: ', item.matricula]},
                          {key: ['Primeiro Nome: ', item.primeironome]},
                          {key: ['Sobrenome: ', item.sobrenome]},
                          {key: ['Data de Nascimento: ', item.dataNascimento]},
                          {key: ['Email: ', item.email]},
                          {key: ['Telefone: ', item.telefone]},
                          {key: ['Senha: ', item.senha]}
                      ]} renderItem={({item}) => <Text style={styles.listItems}><Text style={{fontWeight: 'bold'}}>{item.key[0]}</Text>{item.key[1]}</Text>}/>
                  </View>
              </View>
      </View>
      )
  }


export default TelaDetalhesUsuario;