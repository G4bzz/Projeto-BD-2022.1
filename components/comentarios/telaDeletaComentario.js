import {useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,TextInput} from 'react-native'
import axios from "axios"

import styles from "./telaDeletaComentarioCSS"

const baseURL = 'https://projeto-bdp3.herokuapp.com/api';

function TelaDeletaComentario({route,navigation}){

    const item = route.params.item.item;
    const mat = route.params.matricula;

    const [comentarios,setComentarios] = useState("")
    const [idComentario,setIdComentario] = useState('')

    const getComment = () => {
        axios
            .get(`${baseURL}/comments`)
            .then(function (response) {

                setComentarios(JSON.stringify(response.data));
            })
            .catch(function (error) {
                alert(error.message);
            })
            .finally(function () {
            });
    };

        useEffect(() => {
            getComment();
        },[]);

        const verifica = (id) => {
            var contador = 0;
    
            for (var i = 0 ; i < comentarios.length ; i++) {
               if ((comentarios[i].id_comentario == id) && (comentarios[i].mat_criador == mat_user)){setComentarios(deleteComment(m));Alert.alert('Comentário deletado com sucesso!'); navigation.navigate("Detalhes",{evento:{item},matricula:mat});break;}
               else {contador++;}
            }
            if (contador === comentarios.length) {Alert.alert('Somente o criador do comentário pode deletá-lo!');navigation.navigate("Detalhes",{evento:{item},matricula:mat});}
        };
    

        const deleteComment = (id) => {
        axios
        .delete(`${baseURL}/comments/${id}`)
            .then(function (response) {
                //here you put the function to obtain the response.data
                //setLabel is just an example;
                setComentarios(JSON.stringify(response.data));
            })
            .catch(function (error) {
                alert(error.message);
            })
            .finally(function () {
                //alert('Finally called');
            });
    };
    
      return(
          <View style = {styles.containerPai}>

              <TextInput 
                style = {styles.comentario}
                maxLength = {20}
                value = {idComentario}
                onChangeText={setIdComentario}
                placeholder="Digite o valor do id do comentario"
              />
              
                  <TouchableOpacity
                      style={styles.textButtonCadastrar}
                      onPress={()=> verifica()}
                  >
                      <Text>Deletar Comentário</Text>
                  </TouchableOpacity>

      </View>
      )
  }


export default TelaDeletaComentario;