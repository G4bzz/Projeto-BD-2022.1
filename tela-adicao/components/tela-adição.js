import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

export default function TelaAdicao(){
    const [textoLocal, onChangeTextLocal] = React.useState(null)
    const [textoData, onChangeTextData] = React.useState(null)
    const [textoHorario, onChangeTextHora] = React.useState(null)
    const [textoAutor, onChangeTextAutor] = React.useState(null)
    const [textoContato, onChangeTextContato] = React.useState(null)
    const [textoDesc, onChangeTextDesc] = React.useState(null)
    const [buttonCadastrar, onPressCadas] = React.useState("Confirmar cadastro")


    return(
        <View > 
            <Text style={styles.formLabel}>Insira os dados do evento</Text>
            <View>
                <Text>Local: </Text> 
                <TextInput
                    style={styles.formTextInput}
                    onChangeText={onChangeTextLocal}
                    value={textoLocal}
                    placeholder="Ex: Didática 1"
                />
                <Text>
                    Data:
                </Text>
                <TextInput
                    style={styles.formTextInput}
                    onChangeText={onChangeTextData}
                    value={textoData}
                    placeholder="09/09/2022"
                />
                <Text>
                    Horário:
                </Text>
                <TextInput
                    style={styles.formTextInput}
                    onChangeText={onChangeTextHora}
                    value={textoHorario}
                    placeholder="Ex: 12:00"
                />
                <Text>
                    Autor:
                </Text>
                <TextInput
                    style={styles.formTextInput}
                    onChangeText={onChangeTextAutor}
                    value={textoAutor}
                    placeholder="Ex: Jorge do bolo"
                />
                <Text>
                    Descrição:
                </Text>
                <TextInput
                    style={styles.formTextInput}
                    onChangeText={onChangeTextDesc}
                    value={textoDesc}
                    placeholder="Descreva o evento"
                />
                <Text>
                    Insira uma forma de contato:
                </Text>
                <TextInput
                    style={styles.formTextInput}
                    onChangeText={onChangeTextContato}
                    value={textoContato}
                    placeholder="Ex: e-mail, telefone, instagram, etc"
                />

                <TouchableOpacity
                    style={styles.textButtonCadastrar}
                    onPress={() => onPressCadas}
                >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    formTextInput:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    textButtonCadastrar:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },

})

