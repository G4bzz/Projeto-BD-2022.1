import {useState,useEffect} from 'react'
import {View,SafeAreaView,FlatList,Text,TouchableOpacity,Alert} from 'react-native'
import axios from "axios"
import styles from "./telaListaComentariosCSS"
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';



function TelaComentarios({navigation,route}){
   
  const [comentarios, setComentarios] = useState()


  const item = route.params.evento.evento;
  const mat = route.params.matricula;

  console.log(item.titulo)
  const event = item;

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
        getComment(item.id_evento);
    },[route]);

    const deleteComment = (id) => {
      axios
      .delete(`${baseURL}/comments/${id}`)
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



  const verificaDelete = (id, index) => {
      var contador = 0;

        const item = route.params.evento.evento;
        if ((comentarios[index].mat_criador == mat)){
            deleteComment(id);
            Alert.alert('Comentário deletado com sucesso!'); 
            navigation.navigate("Detalhes",{evento:{item},matricula:mat});
        }
        else {
            Alert.alert('Somente o criador do comentário pode deletá-lo!');
        }

}


    return(
    <SafeAreaView style = {styles.container}>
  
      <FlatList style = {styles.lista}
      data = {comentarios}
      keyExtractor={(item) => item.id_comentario}
      renderItem = {({item, index}) => 
        <View style = {styles.containerEventos}>
            <Text
             style = {styles.titleEventos}> {item.texto}
            </Text>

            <View style = {styles.viewBotoes}>
            <TouchableOpacity
                style={styles.botao1}
                onPress={() => navigation.navigate("AtualizaComentario", {coment:{item},matricula:mat,evento:{event}})}
            >
                <Text>Atualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao2}
                onPress={() => verificaDelete(item.id_comentario, index)}
            >
                <Text>Deletar</Text>
            </TouchableOpacity>

            </View>
            
            
        </View>
        
  
      }
      />
      
    </SafeAreaView>
    );
  }
  

  export default TelaComentarios;