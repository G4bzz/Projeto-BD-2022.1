import React from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, useEffect, Alert } from 'react-native'
import styles from "./telaDetalhesCSS"
import axios from 'axios';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';

function TelaDetalhes({ route, navigation }) {

    const item = route.params.evento.item;
    const matricula = route.params.matricula.matricula;
    const [textoComentario, onChangeTextComentario] = React.useState("");
    const [labelDeleteEvent, setLabel] = React.useState("");
    const [labelUsuario, setUsuario] = React.useState("");
    const comment = new Object();
    comment.texto = textoComentario;

    console.log(matricula);


    const usuario =(Object)=>{
        setUsuario(Object);
    }
    const getUserById = (id) => {
        axios
            .get(`${baseURL}/users/${id}`)
            .then(function (response) {
                //here you put the function to obtain the response.data
                //setLabel is just an example;
                usuario((response.data));
            })
            .catch(function (error) {
                alert(error.message);
            })
            .finally(function () {
                //alert('Finally called');
            });
    };

    const pegaUser = (id) => {
        getUserById(id);
    };

    //pegaUser(item.mat_criador);


    const deleteEvent = (id) => {
        axios
            .delete(`${baseURL}/events/${id}`)
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
    //getUserById((item.mat_criador));
    //Alert.alert(labelUsuario)

    const testaDelete = () => {


        if (parseInt(item.mat_criador) == parseInt(matricula,10)) {
            deleteEvent(parseInt(item.id_evento, 10));
            navigation.navigate("Listagem", {matricula});
        }
        else {
            Alert.alert("Você não pode excluir um evento que não foi você que criou.");
        }
    }

    const editarEvento = () => {
        if (parseInt(item.mat_criador) == parseInt(matricula,10)) {
            navigation.navigate("AtualizarEvento", {item:{item}, matricula:matricula})
        }
        else {
            Alert.alert("Você não pode editar um evento que não foi você que criou.");
        }
    }
        



    //const idEvento = item.id_evento;

    //Alert.alert(labelUsuario.matricula);

    return (
        <View style={styles.containerPai}>
            <View style={styles.header}>
                <Text style={styles.h1}>{item.titulo}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.boxList}>
                    <FlatList data={[
                        { key: ['Descrição: ', item.descricao] },
                        { key: ['Local: ', item.local] },
                        { key: ['Data: ', item.datainicio] },
                        { key: ['Enviado por: ', item.mat_criador] },
                        { key: ['Contato: ', item.cont] }
                    ]} renderItem={({ item }) => <Text style={styles.listItems}><Text style={{ fontWeight: 'bold' }}>{item.key[0]}</Text>{item.key[1]}</Text>} />
                </View>
            </View>
            <TextInput
                style={styles.comentario}
                maxLength={300}
                value={textoComentario}
                onChangeText={onChangeTextComentario}
                placeholder="Adicione um comentário"
            />
            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => navigation.navigate({ name: "Comentarios", params: { texto: textoComentario, id: idEvento }, merge: true }, onChangeTextComentario(""))}

            >
                <Text>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => navigation.navigate({ name: "Comentarios", params: { id: idEvento }, merge: true }, onChangeTextComentario(""))}
            >
                <Text>Ver Comentários</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.excluirEvento}
                onPress={() => testaDelete()}
            >
                <Text>
                    Excluir evento
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.excluirEvento}
                onPress={() => editarEvento()}
            >
                <Text>
                    Editar evento
                </Text>
            </TouchableOpacity>


        </View>
    )
}


export default TelaDetalhes;