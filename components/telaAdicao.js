import {View,Text,TextInput,TouchableOpacity, Alert} from 'react-native'
import {useState} from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import React from 'react'
import styles from "./telaAdicaoCSS"
import axios from 'axios';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';
import moment from 'moment';
import telaAdicaoCSS from './telaAdicaoCSS';

function TelaAdicao({route,navigation}) {

    const [textoTitulo, onCHangeTextoTitulo] = React.useState("")
    const [textoLocal, onChangeTextLocal] = React.useState("")
    const [textoData, onChangeTextData] = React.useState("")
    const [textoHorario, onChangeTextHora] = React.useState("")
    const [textoContato, onChangeTextContato] = React.useState("")
    const [textoDesc, onChangeTextDesc] = React.useState("")
    const [textoTipoEvento, onChangeTextTipoEvent] = React.useState("");

    const matricula = route.params.matPar;

    const tiposEventos = ["Achado","Evento de extensão", "Festa", "Perdido", "Venda"];


    const createEvent = () => {
        axios
        .post(`${baseURL}/events/`, 
            /* { //EXAMPLE
                "titulo": "EVENTO TESTE",
                "local": "EVENTO TESTE",
                "datainicio": "2022-11-25T00:00:00",
                "datafim": "2022-11-25T00:00:00",
                "descricao": "EVENTO TESTE",
                "id_evento": 9,
                "mat_criador": 2022002,
                "tipoevento": "Festa",
            } */
            {
                "titulo": textoTitulo,
                "local": textoLocal,
                "datainicio": textoData,
                "datafim": null,
                "descricao": textoDesc,
                "mat_criador": matricula,
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

    const cadastrarEMudarTela = () =>{

        createEvent();
        Alert.alert('Evento criado com sucesso');
        navigation.navigate("Listagem", {mat}); 
    
    }

        

    function verificarCampos(){
        if (textoTitulo == ""){
            Alert.alert('O titulo não pode ser vazio. Por favor insira um título');
        }
        else if(textoLocal == "") {
            Alert.alert('O local não pode ser vazio. Por favor insira um local');
        }
        else if(textoData == "") {
            Alert.alert('O local não pode ser vazio. Por favor insira uma data no formato dd/mm/aaaa');
        }
        else if(textoDesc == "") {
            Alert.alert('A descrição não pode ser vazia. Por favor insira uma descrição');
        }
        else{return true;}
    }

    function verificarData(data){
        if (moment(data, "DD/MM/YYYY", true).isValid()){
            return true;
        }
        else{
            return false;
        }
    }


    return(
        <View style = {styles.container}> 

                <Text style = {styles.title}>Nome: </Text> 
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoTitulo}
                    onChangeText={onCHangeTextoTitulo}
                    placeholder="Calourada de Psicologia"
                />

                <Text style = {styles.title}>Local: </Text> 
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoLocal}
                    onChangeText={onChangeTextLocal}
                    placeholder="Ex: Didática 1"
                />
                
                <Text style = {styles.title}>Data:</Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoData}
                    onChangeText={onChangeTextData}
                    placeholder="09/09/2022"
                />
                <Text style = {styles.title}>
                    Horário:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoHorario}
                    onChangeText={onChangeTextHora}
                    placeholder="Ex: 12:00"
                />
                <Text style={styles.title}>
                    Tipo do evento:
                </Text>
                <SelectDropdown
                    buttonStyle={styles.dropdown}
                    data={tiposEventos}
                    onSelect={onChangeTextTipoEvent}
                    defaultButtonText="Identifique o tipo do evento"
                    buttonTextAfterSelection={textoTipoEvento}
                    defaultValue={null}
                    dropdownIconPosition="right"
                />
                <Text style = {styles.title}>
                    Descrição:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoDesc}
                    onChangeText={onChangeTextDesc}
                    placeholder="Descreva o evento"
                />
                <Text style = {styles.title}>
                    Insira uma forma de contato:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoContato}
                    onChangeText={onChangeTextContato}
                    placeholder="Ex: e-mail, telefone, instagram, etc"
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
