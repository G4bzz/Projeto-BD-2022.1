import { View, Text, TextInput, TouchableOpacity, Alert, InteractionManager } from 'react-native'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import styles from "./telaAttEventoCSS "
import axios from 'axios';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';


function TelaAttEvento({ route, navigation }) {

    const item = route.params.evento.evento
    const mat = route.params.matricula;
    const tiposEventos = ["Achado", "Evento de extensão", "Festa", "Perdido", "Venda"];

    const [eventos,setEventos] = useState('')
    //variáveis usadas na parte de att o evento
    const [titulo, setTitulo] = useState("")
    const [local, setLocal] = useState("")
    const [datainicio, setDatainicio] = useState("")
    const [descricao,setDescricao] = useState("")
    const [datafim, setDataFim] = useState("")
    const [tipoEvento, setTipoEvento] = useState("")




    const temItempraAtt = true;

    const index = temItempraAtt ? tiposEventos.indexOf(tipoEvento) : null;


    
    //Alert.alert(matricula);

    const updateEvent = (id) => {
        axios
            .put(`${baseURL}/events/${id}`, 
            /* { //EXAMPLE
                "titulo": "EVENTO TESTE",
                "local": "EVENTO TESTE",
                "datainicio": "2022-11-25T00:00:00",
                "datafim": "2022-11-25T00:00:00",
                "descricao": "EVENTO TESTE",
                "tipoevento": "Festa",
            } */
            {
                "titulo": titulo,
                "local": local,
                "datainicio": datainicio,
                "datafim": datafim,
                "descricao": descricao,
                "tipoevento": tipoEvento,
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
                value={titulo}
                onChangeText={setTitulo}
                placeholder="Calourada de Psicologia"
            />

            <Text style={styles.title}>Local: </Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={local}
                onChangeText={setLocal }
                placeholder="Ex: Didática 1"
            />

            <Text style={styles.title}>Data de início:</Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={datainicio}
                onChangeText={setDatainicio}
                placeholder="Ex: 09/09/2022 15:30"
            />

            <Text style={styles.title}>Data de fim:</Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={datafim}
                onChangeText={setDataFim}
                placeholder="Ex: 01/01/2021 15:30"
            />
            <Text style={styles.title}>
                Tipo do evento:
            </Text>
            <SelectDropdown
                buttonStyle={styles.dropdown}
                data={tiposEventos}
                onSelect={setTipoEvento}
                defaultButtonText="Identifique o tipo do evento"
                defaultValue={tiposEventos[index]}
                dropdownIconPosition="right"
            />
            <Text style={styles.title}>
                Descrição:
            </Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={descricao}
                onChangeText={setDescricao}
                placeholder="Descreva o evento"
            />

            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => {updateEvent(item.id_evento);navigation.navigate("Listagem",{mat})}}
            >
                <Text>Atualizar</Text>
            </TouchableOpacity>


        </View>
    );
}


export default TelaAttEvento;
