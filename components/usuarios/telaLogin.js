import {useState,useEffect} from 'react'
import {Text,TextInput,View,TouchableOpacity,Alert} from 'react-native'
import styles from "./telaLoginCSS"
import axios from 'axios'
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';
function TelaLogin({navigation}) {

    const [users,setUsers] = useState();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    

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

    const autenticacao = (em,senha) => {
      var contador = 0;

      for (var i = 0 ; i < users.length ; i++) {
         if ((users[i].email == em) && (users[i].senha == senha)) {
          const mat = users[i].matricula;
          Alert.alert('Autenticação realizada com sucesso!'); 
          navigation.navigate("Listagem",{mat});
          break;
        }
         else {contador++;}
      }
      if (contador === users.length) {Alert.alert('Email ou senha inválidos!');}
  };
  
    return(
        <View style = {styles.container}>

            <Text style = {styles.texto}>Email</Text>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira o email' 
                maxLength = {50}
                value = {email}
                onChangeText = {setEmail}
                >
            </TextInput>

            <Text style = {styles.texto}>Senha</Text>

            <TextInput 
                style = {styles.inputs}
                placeholder = 'Insira a senha' 
                secureTextEntry = {true}
                maxLength = {30}
                value = {password}
                onChangeText = {setPassword}
                >
            </TextInput>

            <TouchableOpacity 
                style = {styles.botao}
                onPress={() => autenticacao(email,password)}
                >
                <Text style = {styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>

        </View>
    );
}


export default TelaLogin;