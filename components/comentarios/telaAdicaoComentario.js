import {useState} from 'react'
import {View,Text,TouchableOpacity,TextInput, Alert} from 'react-native'
import axios from "axios"
import styles from "./telaAdicaoComentarioCSS"

const baseURL = 'https://projeto-bdp3.herokuapp.com/api';



function TelaAdicaoComentario({route,navigation}){

    const mat = route.params.matricula;
    const item = route.params.evento.evento;

    const [textoComentario, setTextoComentario] = useState("")
    const [data,setData] = useState("")
    const [comentarios,setComentarios] = useState("")

    const dataTeste = new Date().toISOString();

    const createComment = () => {

        axios
        .post(`${baseURL}/comments/`, 
            /* { //EXAMPLE
                "data": "2022-11-20T00:00:00.000Z",
                "texto": "Comentário TESTE.",
                "mat_criador": 2022005,
                "id_evento": 2,
                "id_comentario": 12,

            } */
            {
                "data": dataTeste,
                "texto": textoComentario,
                "mat_criador": mat,
                "id_evento": item.id_evento,
            })
            .then(function (response) {
                //here you put the function to obtain the response.data
                //setLabel is just an example;
                setComentarios(response.data);
                Alert.alert("O comentário foi criado com sucesso!")
                
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
              <Text style = {styles.h1}>Comentário sobre o evento</Text>

              <TextInput 
                style = {styles.comentario1}
                maxLength = {50}
                value = {textoComentario}
                onChangeText={setTextoComentario}
                placeholder="Adicione o comentário"
              />
                  <TouchableOpacity
                      style={styles.textButtonCadastrar}
                      onPress={()=> {createComment();navigation.navigate("Detalhes",{evento:{item},matricula:mat});}}

                  >
                      <Text>Adicionar Comentário</Text>
                  </TouchableOpacity>

      </View>
      )
  }


export default TelaAdicaoComentario;