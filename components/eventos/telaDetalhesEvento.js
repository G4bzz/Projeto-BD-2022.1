import {useState,useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native'
import styles from "./telaDetalhesCSS"
import axios from 'axios';
const baseURL = 'https://projeto-bdp3.herokuapp.com/api';

function TelaDetalhes({ route, navigation }) {

    const evento = route.params.evento.item;
    const mat = route.params.matricula;

    const [eventos,setEventos] = useState("")

    const getEvents = () => {
        axios
            .get(`${baseURL}/events`)
            .then(function (response) {
                //here you put the function to obtain the response.data
                //setLabel is just an example;
                setEventos(response.data);
            })
            .catch(function (error) {
                alert(error.message);
            })
            .finally(function () {
                //alert('Finally called');
            });
    };

    useEffect(() => {
        getEvents();
    },[]);


    const verifica = (id) => {
        var contador = 0;

        for (var i = 0 ; i < eventos.length ; i++) {
           if ((eventos[i].id_evento == id) && (eventos[i].mat_criador == mat)){
            setEventos(deleteEvent(id));
            Alert.alert('Evento deletado com sucesso!'); 
            navigation.navigate("Listagem",{mat});break;}
           else {contador++;}
        }
        if (contador === eventos.length) {Alert.alert('Somente o criador do evento pode deletá-lo!');navigation.navigate("Listagem",{mat});}
    };


    const deleteEvent = (id) => {
        axios
        .delete(`${baseURL}/events/${id}`)
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
        <View style={styles.containerPai}>
            <View style={styles.header}>
                <Text style={styles.h1}>{evento.titulo}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.boxList}>
                    <FlatList data={[
                        { key: ['Descrição: ', evento.descricao] },
                        { key: ['Local: ', evento.local] },
                        { key: ['Data: ', evento.datainicio] },
                        { key: ['Enviado por usuário com matrícula: ', evento.mat_criador] },
                    ]} renderItem={({ item }) => <Text style={styles.listItems}><Text style={{ fontWeight: 'bold' }}>{item.key[0]}</Text>{item.key[1]}</Text>} />
                </View>
            </View>

            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => navigation.navigate("AdicionaComentario", {evento:{evento},matricula:mat})}

            >
                <Text>Adicionar Comentário</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => {evento.mat_criador==mat? navigation.navigate("AtualizaEvento", {evento:{evento},matricula:mat}):Alert.alert('Somente o criador pode atualizar o evento')}}

            >
                <Text>Atualizar Evento</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => verifica(evento.id_evento)}

            >
                <Text>Deletar Evento</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.textButtonCadastrar}
                onPress={() => navigation.navigate("Comentarios",{evento:{evento},matricula:mat})}
            >
                <Text>Ver Comentários</Text>
            </TouchableOpacity>
        </View>
    )
}


export default TelaDetalhes;