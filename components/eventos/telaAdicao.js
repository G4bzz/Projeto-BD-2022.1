import { View, Text, TextInput, TouchableOpacity, Alert, InteractionManager } from 'react-native'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import styles from "./telaAdicaoCSS"
import axios from 'axios';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';
function TelaAdicao({ route, navigation }) {

    
    const mat = route.params.mat;
    console.log(mat);
    const [textoTitulo, onCHangeTextoTitulo] = useState("")
    const [textoLocal, onChangeTextLocal] = useState("")
    const [textoDataInicio, onChangeTextDataInicio] = useState("")
    const [textoDataFim, onChangeTextDataFim] = useState("")
    const [textoDesc, onChangeTextDesc] = useState("")
    const [textoTipoEvento, onChangeTextTipoEvent] = useState("");
    const tiposEventos = ["Achado", "Evento de extensão", "Festa", "Perdido", "Venda"];

    const [eventos,setEventos] = useState('');




    
    console.log(mat)


    const createEvent = () => {


        axios
            .post(`${baseURL}/events/`,

                {
                    "titulo": textoTitulo,
                    "local": textoLocal,
                    "datainicio": textoDataInicio,
                    "datafim": textoDataFim,
                    "descricao": textoDesc,
                    "mat_criador": parseInt(mat),
                    "tipoevento": textoTipoEvento,
                })
            .then(function (response) {
                //here you put the function to obtain the response.data
                //setLabel is just an example;
                setEventos(JSON.stringify(response.data));
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

            <Text style={styles.title}>Nome: </Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={textoTitulo}
                onChangeText={onCHangeTextoTitulo}
                placeholder="Calourada de Psicologia"
            />

            <Text style={styles.title}>Local: </Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={textoLocal}
                onChangeText={onChangeTextLocal}
                placeholder="Ex: Didática 1"
            />

            <Text style={styles.title}>Data de Início:</Text>
            <TextInput
                maxLength={10}
                style={styles.formTextInput}
                value={textoDataInicio}
                onChangeText={onChangeTextDataInicio}
                placeholder="Ex: 09/09/2022"
            />

            <Text style={styles.title}>Data de Fim:</Text>
            <TextInput
                maxLength={10}
                style={styles.formTextInput}
                value={textoDataFim}
                onChangeText={onChangeTextDataFim}
                placeholder="Ex: 01/01/2020"
            />

            <Text style={styles.title}>
                Tipo do evento:
            </Text>
            <SelectDropdown
                buttonStyle={styles.dropdown}
                data={tiposEventos}
                onSelect={onChangeTextTipoEvent}
                defaultButtonText="Identifique o tipo do evento"
                defaultValue={null}
                dropdownIconPosition="right"
            />
            <Text style={styles.title}>
                Descrição:
            </Text>
            <TextInput
                maxLength={50}
                style={styles.formTextInput}
                value={textoDesc}
                onChangeText={onChangeTextDesc}
                placeholder="Descreva o evento"
            />

            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => {setEventos(createEvent());Alert.alert('Evento criado com sucesso');navigation.navigate("Listagem",{mat});}}
            >
                <Text>Cadastrar</Text>
            </TouchableOpacity>


        </View>
    );
}


export default TelaAdicao;
