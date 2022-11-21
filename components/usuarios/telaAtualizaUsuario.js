import {useState,useEffect} from 'react'
import {Text,TextInput,View,TouchableOpacity ,Alert} from 'react-native'
import styles from "./telaAtualizaUsuarioCSS"
import axios from 'axios'
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';


function TelaAtualizaUsuario({navigation}) {

    const [matricula,setMatricula] = useState('')
    const [primeiroNome,setPrimeiroNome] = useState('')
    const [sobrenome,setSobrenome] = useState('')
    const [dataNascimento,setDataNascimento] = useState('')
    const [email,setEmail] = useState('')
    const [telefone,setTelefone] = useState('')
    const [users,setUsers] = useState('');
   
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
    


    const verifica = (mat) => {
        var contador = 0;

        for (var i = 0 ; i < users.length ; i++) {
           if (users[i].matricula == mat) {setUsers(updateUser(mat));Alert.alert('Usuário atualizado com sucesso!'); navigation.navigate("Principal");break;}
           else {contador++;}
        }
        if (contador === users.length) {Alert.alert('A matrícula digitada não existe!');}
    };


      const updateUser = (id) => {
        axios
          .put(`${baseURL}/users/${id}`, 
          
          {
            "primeironome": primeiroNome,
            "sobrenome": sobrenome,
            "datanascimento": dataNascimento,
            "email": email,
            "telefone": telefone,
            //1999-04-21T00:00:00
          })
          .then(function (response) {
            //here you put the function to obtain the response.data
            //setLabel is just an example;
            setUsers(JSON.stringify(response.data));
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

            <Text style = {styles.texto}>Matrícula</Text>

            <TextInput
                style = {styles.inputs}
                placeholder = 'Insira a matrícula' 
                maxLength = {50}
                value = {matricula}
                onChangeText = {setMatricula}
                >
            </TextInput>

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

            <TouchableOpacity 
                style = {styles.botao}
                onPress = {() => {setUsers(verifica(matricula));navigation.navigate("Principal")}}
                >
                <Text style = {styles.textoBotao}>Atualizar</Text>
            </TouchableOpacity >
        </View>
    );
}


export default TelaAtualizaUsuario;