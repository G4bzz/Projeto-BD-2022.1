import {useState} from 'react'
import {Text,TextInput,View,TouchableOpacity ,Alert} from 'react-native'
import styles from "./telaCadastroUsuarioCSS"
import axios from 'axios'

const baseURL = 'https://projeto-bdp3.herokuapp.com/api';


function TelaCadastro({navigation}) {

    const [matricula,setMatricula] = useState(0)
    const [primeiroNome,setPrimeiroNome] = useState('')
    const [sobrenome,setSobrenome] = useState('')
    const [dataNascimento,setDataNascimento] = useState('')
    const [email,setEmail] = useState('')
    const [telefone,setTelefone] = useState('')
    const [password,setPassword] = useState('')
    const [users,setUsers] = useState()
   
    
    const createUser = () => {
        
        axios
        .post(`${baseURL}/users/`, 
          {
            //"matricula":parseInt(matricula),
            "primeironome": primeiroNome,
            "sobrenome": sobrenome,
            "datanascimento": dataNascimento,
            "email": email,
            "telefone": telefone,
            "senha": password,
          })
          .then(function (response) {
            //here you put the function to obtain the response.data
            //setLabel is just an example;
            setUsers(JSON.stringify(response.data));
            Alert.alert('Usuário cadastrado com sucesso!');
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

            

            <Text style = {styles.texto}>Primeiro Nome</Text>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira o seu primeiro nome' 
                maxLength = {50}
                value = {primeiroNome}
                onChangeText = {setPrimeiroNome}
                >
            </TextInput>

            <Text style = {styles.texto}>Sobrenome</Text>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira o seu sobrenome' 
                maxLength = {50}
                value = {sobrenome}
                onChangeText = {setSobrenome}
                >
            </TextInput>

            <Text style = {styles.texto}>Data de Nascimento</Text>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira a sua data de nascimento' 
                maxLength = {20}
                value = {dataNascimento}
                onChangeText = {setDataNascimento}
                >
            </TextInput>

            <Text style = {styles.texto}>Email</Text>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira o seu email' 
                maxLength = {50}
                value = {email}
                onChangeText = {setEmail}
                >
            </TextInput>

            <Text style = {styles.texto}>Telefone</Text>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira o seu telefone' 
                maxLength = {20}
                value = {telefone}
                onChangeText = {setTelefone}
                >
            </TextInput>

            <Text style = {styles.texto}>Senha</Text>

            <TextInput 
                style = {styles.inputs}
                placeholder = 'Insira a senha' 
                maxLength = {30}
                secureTextEntry = {true}
                value = {password}
                onChangeText = {setPassword}
                >
            </TextInput>

            <TouchableOpacity 
                style = {styles.botao}
                onPress = {() => {setUsers(createUser());navigation.navigate("Principal");}}
                >
                <Text style = {styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity >
        </View>
    );
}


export default TelaCadastro;