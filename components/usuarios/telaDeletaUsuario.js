import {useState,useEffect} from 'react'
import {Text,TextInput,View,TouchableOpacity ,Alert} from 'react-native'
import styles from "./telaDeletaUsuarioCSS"
import axios from 'axios'
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';


function TelaDeletaUsuario({navigation}) {

    const [mat,setMat] = useState('');
    const [pass,setPass] = useState();
    const [users,setUsers] = useState();

    const getUsers = () => {
      axios
        .get(`${baseURL}/users`)
        .then(function (response) {

          setUsers(response.data);
        })
        .catch(function (error) {
          alert(error.message);
        })
        .finally(function () {
        });
    };

    useEffect(() => {
      getUsers();
    },[]);
    


    const verifica = (m) => {
        var contador = 0;

        for (var i = 0 ; i < users.length ; i++) {
           if ((users[i].senha == pass) && (users[i].matricula == m)) {setUsers(deleteUser(m));Alert.alert('Usuário deletado com sucesso!'); navigation.navigate("Principal");break;}
           else {contador++;}
        }
        if (contador === users.length) {Alert.alert('Credenciais incorretas!');}
    };


    const deleteUser = (id) => {
        axios
        .delete(`${baseURL}/users/${id}`)
          .then(function (response) {
            //here you put the function to obtain the response.data
            //setLabel is just an example;
            setUsers(response.data);
          })
          .catch(function (error) {
            alert(error.message);
          })
          .finally(function () {
            //alert('Finally called');
          });
      };

    return(
        <View style = {styles.container}>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira a matrícula do usuário' 
                maxLength = {30}
                value = {mat}
                onChangeText = {setMat}
                >
            </TextInput>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira a senha do usuário' 
                maxLength = {30}
                secureTextEntry = {true}
                value = {pass}
                onChangeText = {setPass}
                >
            </TextInput>

            <TouchableOpacity
            style={styles.botao}
            onPress={() => verifica(mat)}>
            <Text style = {styles.textoBotao}>Deletar</Text>
            </TouchableOpacity>

        </View>
    );
}


export default TelaDeletaUsuario;