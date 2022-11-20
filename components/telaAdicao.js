import { View, Text, TextInput, TouchableOpacity, Alert, InteractionManager } from 'react-native'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import React from 'react'
import styles from "./telaAdicaoCSS"
import axios from 'axios';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';
import moment from 'moment';
import telaAdicaoCSS from './telaAdicaoCSS';

function TelaAdicao({ route, navigation }) {

    
    const matricula = route.params.matricula;
    const [textoTitulo, onCHangeTextoTitulo] = React.useState("")
    const [textoLocal, onChangeTextLocal] = React.useState("")
    const [textoData, onChangeTextData] = React.useState("")
    const [textoDesc, onChangeTextDesc] = React.useState("")
    const [textoTipoEvento, onChangeTextTipoEvent] = React.useState("");
    const tiposEventos = ["Achado", "Evento de extensão", "Festa", "Perdido", "Venda"];




    
    //Alert.alert(matricula);


    const createEvent = () => {
        axios
            .post(`${baseURL}/events/`,

                {
                    "titulo": textoTitulo,
                    "local": textoLocal,
                    "datainicio": textoData,
                    "descricao": textoDesc,
                    "mat_criador": parseInt(matricula),
                    "tipoevento": textoTipoEvento,
                })
            .then(function (response) {
                //here you put the function to obtain the response.data
                //setLabel is just an example;
                setLabel((response.data));
            })
            .catch(function (error) {
                alert(error.message);
            })
            .finally(function () {
                //alert('Finally called');
            });
    };



    const cadastrarEMudarTela = () => {

        createEvent();
        console.log(textoTitulo + textoLocal + textoData + textoDesc + matricula + textoTipoEvento)
        Alert.alert('Evento criado com sucesso');
        navigation.navigate("Listagem", { matricula });

    }



    function verificarCampos() {
        if (textoTitulo == "") {
            Alert.alert('O titulo não pode ser vazio. Por favor insira um título');
        }
        else if (textoLocal == "") {
            Alert.alert('O local não pode ser vazio. Por favor insira um local');
        }
        else if (textoData == "") {
            Alert.alert('O local não pode ser vazio. Por favor insira uma data no formato dd/mm/aaaa');
        }
        else if (textoDesc == "") {
            Alert.alert('A descrição não pode ser vazia. Por favor insira uma descrição');
        }
        else { return true; }
    }

    function verificarData(data) {
        if (moment(data, "DD/MM/YYYY", true).isValid()) {
            return true;
        }
        else {
            return false;
        }
    }


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

            <Text style={styles.title}>Data:</Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={textoData}
                onChangeText={onChangeTextData}
                placeholder="Ex: 09/09/2022 15:30"
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
                maxLength={36}
                style={styles.formTextInput}
                value={textoDesc}
                onChangeText={onChangeTextDesc}
                placeholder="Descreva o evento"
            />

            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => cadastrarEMudarTela()}
            >
                <Text>Cadastrar</Text>
            </TouchableOpacity>


        </View>
    );
}


export default TelaAdicao;
