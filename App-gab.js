import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { useState , useEffect} from "react";
import axios from 'axios';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';


export default function App() {
  const [label, setLabel] = useState('');
  
  //onPress example: onPress={() => getUsers}
  const getUsers = () => {
    axios
      .get(`${baseURL}/users`)
      .then(function (response) {
        //here you put the function to obtain the response.data
        //setLabel is just an example;
        setLabel(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        //alert('Finally called');
      });
  };
  
  //onPress example: onPress={() => getUserById(id)}
  const getUserById = (id) => {
    axios
      .get(`${baseURL}/users/${id}`)
      .then(function (response) {
        //here you put the function to obtain the response.data
        //setLabel is just an example;
        setLabel(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        //alert('Finally called');
      });
  };
  
  //onPress example: onPress={() => updateUser(id)}
  const updateUser = (id) => {
    axios
      .put(`${baseURL}/users/${id}`, 
      /* { //EXAMPLE
        "primeironome": "MICHAELTEAMO",
        "sobrenome": "MICHAELTEAMO",
        "datanascimento": "1999-04-21T00:00:00",
        "email": "MICHAELTEAMO",
        "telefone": "99999911",
      } */
      {
        "primeironome": var_nome,
        "sobrenome": var_sobrenome,
        "datanascimento": var_datanascimento,
        "email": var_email,
        "telefone": var_telefone,
      })
      .then(function (response) {
        //here you put the function to obtain the response.data
        //setLabel is just an example;
        setLabel(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        //alert('Finally called');
      });
  };

  //onPress example: onPress={() => createUser()}
  const createUser = () => {
    axios
    .post(`${baseURL}/users/`, 
      /* { //EXAMPLE
        "matricula": 2022009,
        "primeironome": "TESTE2",
        "sobrenome": "TESTE2",
        "datanascimento": "1988-04-21T00:00:00",
        "email": "TESTE2",
        "telefone": "82873823",
        "senha": "TESTE2",
      } */
      {
        "matricula":82182,
        "primeironome": "Almir",
        "sobrenome": "Santos",
        "datanascimento": "1988-04-21T00:00:00",
        "email": "almirsantos@email.com",
        "telefone": "99999999",
        "senha": "almir123",
      })
      .then(function (response) {
        //here you put the function to obtain the response.data
        //setLabel is just an example;
        setLabel(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        //alert('Finally called');
      });
  };

  //onPress example: onPress={() => deleteUser(id)}
  const deleteUser = (id) => {
    axios
    .delete(`${baseURL}/users/${id}`)
      .then(function (response) {
        //here you put the function to obtain the response.data
        //setLabel is just an example;
        setLabel(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        //alert('Finally called');
      });
  };

  return (
    <View style={styles.container}>
     <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setLabel(getUsers)}>
        <Text>getUsers</Text>
      </TouchableOpacity>
      
     <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setLabel(getUserById(2022002))}>
        <Text>selectUserById</Text>
      </TouchableOpacity>
      
     <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setLabel(createUser)}>
        <Text>createUser</Text>
      </TouchableOpacity>

     <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setLabel(updateUser(2022009))}>
        <Text>updateUser</Text>
      </TouchableOpacity>
      
     <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setLabel(deleteUser(2022009))}>
        <Text>deleteUser</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setLabel('')}>
        <Text>Limpar texto</Text>
      </TouchableOpacity>
      <Text>{label}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});