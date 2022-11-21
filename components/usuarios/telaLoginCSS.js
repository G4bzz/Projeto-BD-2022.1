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
    texto:{
        fontSize:18,
        justifyContent:'center'
    },
    inputs:{
        width:"90%",
        marginLeft:'5%',
        marginRight:'5%',
        borderWidth:1,
        alignItems:'center',
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:'5%',
        margin:12,
        paddingLeft:10,
    },
    botao:{
        width:"20%",
        height:'5%',
        backgroundColor:'red',
        marginBottom:'2%',
        borderRadius:90,
        justifyContent:'center',
        alignItems:'center',
    },  
    textoBotao:{
        fontSize:16,
    }
})