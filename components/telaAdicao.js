import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import {useState} from 'react'
import styles from "./telaAdicaoCSS"

function TelaAdicao({navigation}) {
    const [textoNome, onChangeTextNome] = useState("")
    const [textoLocal, onChangeTextLocal] = useState("")
    const [textoData, onChangeTextData] = useState("")
    const [textoHorario, onChangeTextHora] = useState("")
    const [textoAutor, onChangeTextAutor] = useState("")
    const [textoContato, onChangeTextContato] = useState("")
    const [textoDesc, onChangeTextDesc] = useState("")

    let info = new Object();
    info.nome = textoNome;
    info.loc = textoLocal;
    info.data = textoData;
    info.hora = textoHorario;
    info.aut = textoAutor;
    info.cont = textoContato;
    info.desc = textoDesc;

    return(
        <View style = {styles.container}> 

                <Text style = {styles.title}>Nome: </Text> 
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoNome}
                    onChangeText={onChangeTextNome}
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
                <Text style = {styles.title}>
                    Autor:
                </Text>
                <TextInput
                    maxLength = {36}
                    style={styles.formTextInput}
                    value = {textoAutor}
                    onChangeText={onChangeTextAutor}
                    placeholder="Ex: Jorge do bolo"
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
                    onPress={() => navigation.navigate({name:"Listagem",params:{nome:textoNome,local:textoLocal,data:textoData,hora:textoHorario,autor:textoAutor,desc:textoDesc,cont:textoContato},merge:true})}
                >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>


        </View>
    );
}


export default TelaAdicao;
