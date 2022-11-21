import {useState,useEffect} from 'react'
import {View,Text,Alert,TouchableOpacity,TextInput} from 'react-native'
import axios from "axios"
import styles from "./telaAtualizaComentarioCSS"
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';


function TelaAtualizaComentario({navigation,route}){

    const itemComentario = route.params.coment.item;
    const mat = route.params.matricula;
    const item = route.params.evento.event;

    const [textoComentario, setTextoComentario] = useState("");
    const [comentarios,setComentarios] = useState("");

    const getComment = (id) => {
        axios
            .get(`${baseURL}/comments/${id}`)
            .then(function (response) {
                //here you put the function to obtain the response.data
                //setLabel is just an example;
                setComentarios(response.data);
            })
            .catch(function (error) {
                alert(error.message);
            })
            .finally(function () {
                //alert('Finally called');
            });
    };

    useEffect(() => {
        getComment(itemComentario.id_evento);
    },[route]);

    const verifica = () => {
        var contador = 0;

        for (var i = 0 ; i < comentarios.length ; i++) {

           if ((comentarios[i].id_evento == itemComentario.id_evento) && (comentarios[i].mat_criador == mat)){setComentarios(updateComment(itemComentario.id_comentario));Alert.alert('Comentário atualizado com sucesso!'); navigation.navigate("Detalhes",{evento:{item},matricula:mat});break;}
           else {contador++;}
        }
        if (contador === comentarios.length) {Alert.alert('Somente o criador do comentário pode deletá-lo!');navigation.navigate("Detalhes",{evento:{item},matricula:mat});}
    };


    const updateComment = (id) => {
        axios
            .put(`${baseURL}/comments/${id}`, 
            /* { //EXAMPLE
                "texto": "Comentário TESTE.",
            } */
            {
                "texto": textoComentario,
              
            })
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
            
              <Text style = {styles.h1}>Comentário sobre o evento</Text>

              <TextInput 
                style = {styles.comentario1}
                maxLength = {50}
                value = {textoComentario}
                onChangeText={setTextoComentario}
                placeholder="Adicione um comentário"
              />
                  <TouchableOpacity
                      style={styles.textButtonCadastrar}
                      onPress={()=> {verifica(itemComentario.id_evento)}}

                  >
                      <Text>Atualizar Comentário</Text>
                  </TouchableOpacity>


              

      </View>
      )
  }


export default TelaAtualizaComentario;