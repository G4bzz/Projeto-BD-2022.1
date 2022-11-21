import {StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get('window').width;


export default StyleSheet.create({
    
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    botao:{
        width:"80%",
        height:'5%',
        backgroundColor:'red',
        marginBottom:'2%',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },  
    textoBotao:{
        fontSize:16,
    }
})