import { View, Text, TextInput, TouchableOpacity, Alert, InteractionManager } from 'react-native'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import React from 'react'
import styles from "./telaAttEventoCSS "
import axios from 'axios';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';


function TelaAttEvento({ route, navigation }) {

    const item = route.params.item.item
    
    const tiposEventos = ["Achado", "Evento de extensão", "Festa", "Perdido", "Venda"];


    //variáveis usadas na parte de att o evento
    const [textoTituloI, onCHangeTextoTituloi] = React.useState(item.titulo)
    const [textoLocalI, onChangeTextLocali] = React.useState(item.local)
    const [textoDataI, onChangeTextDatai] = React.useState(item.datainicio)
    const [textoDescI, onChangeTextDesci] = React.useState(item.descricao)
    const [textoTipoEventoI, onChangeTextTipoEventi] = React.useState(item.tipoevento);




    const temItempraAtt = true;

    const index = temItempraAtt ? tiposEventos.indexOf(textoTipoEventoI) : null;


    
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
                "titulo": textoTituloI,
                "local": textoLocalI,
                "datainicio": textoDataI,
                "datafim": "",
                "descricao": textoDescI,
                "tipoevento": textoTipoEventoI,
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
    


    const cadastrarEMudarTela = () => {
        updateEvent(item.id_evento);
        Alert.alert('Evento atualizado com sucesso');

        navigation.navigate("Listagem", { matricula });

    }





    return (
        <View style={styles.container}>

            <Text style={styles.title}>Nome: </Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={textoTituloI}
                onChangeText={onCHangeTextoTituloi}
                placeholder="Calourada de Psicologia"
            />

            <Text style={styles.title}>Local: </Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={textoLocalI}
                onChangeText={onChangeTextLocali }
                placeholder="Ex: Didática 1"
            />

            <Text style={styles.title}>Data:</Text>
            <TextInput
                maxLength={36}
                style={styles.formTextInput}
                value={textoDataI}
                onChangeText={onChangeTextDatai}
                placeholder="Ex: 09/09/2022 15:30"
            />
            <Text style={styles.title}>
                Horário:
            </Text>
            <Text style={styles.title}>
                Tipo do evento:
            </Text>
            <SelectDropdown
                buttonStyle={styles.dropdown}
                data={tiposEventos}
                onSelect={onChangeTextTipoEventi}
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
                value={textoDescI}
                onChangeText={onChangeTextDesci}
                placeholder="Descreva o evento"
            />

            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => cadastrarEMudarTela()}
            >
                <Text>Atualizar evento</Text>
            </TouchableOpacity>


        </View>
    );
}


export default TelaAttEvento;
