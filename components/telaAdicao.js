import React from 'react'
import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import styles from "./telaAdicaoCSS"

function TelaAdicao({navigation}) {
    const [textoNome, onChangeTextNome] = React.useState("")
    const [textoLocal, onChangeTextLocal] = React.useState("")
    const [textoData, onChangeTextData] = React.useState("")
    const [textoHorario, onChangeTextHora] = React.useState("")
    const [textoAutor, onChangeTextAutor] = React.useState("")
    const [textoContato, onChangeTextContato] = React.useState("")
    const [textoDesc, onChangeTextDesc] = React.useState("")

    let info = new Object();
    info.nome = textoNome;
    info.loc = textoLocal;
    info.data = textoData;
    info.hora = textoHorario;
    info.aut = textoAutor;
    info.cont = textoContato;
    info.desc = textoDesc;

    return(
        <View > 
            <Text style={styles.formLabel}>Insira os dados do evento</Text>
            <View>
                <Text>Nome: </Text> 
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoNome}
                    onChangeText={onChangeTextNome}
                    placeholder="Calourada de Psicologia"
                />

                <Text>Local: </Text> 
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoLocal}
                    onChangeText={onChangeTextLocal}
                    placeholder="Ex: Didática 1"
                />
                
                <Text>
                    Data:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoData}
                    onChangeText={onChangeTextData}
                    placeholder="09/09/2022"
                />
                <Text>
                    Horário:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoHorario}
                    onChangeText={onChangeTextHora}
                    placeholder="Ex: 12:00"
                />
                <Text>
                    Autor:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoAutor}
                    onChangeText={onChangeTextAutor}
                    placeholder="Ex: Jorge do bolo"
                />
                <Text>
                    Descrição:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoDesc}
                    onChangeText={onChangeTextDesc}
                    placeholder="Descreva o evento"
                />
                <Text>
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
                    onPress={() => navigation.navigate({name:"Listagem",params:{nome:textoNome,local:textoLocal,data:textoData,hora:textoHorario,autor:textoAutor,desc:textoDesc,cont:textoContato},merge:true})}
                >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


export default TelaAdicao;
