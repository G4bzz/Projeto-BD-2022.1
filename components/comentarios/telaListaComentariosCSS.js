import {StyleSheet} from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get('window').width;

export default StyleSheet.create({

    container: {
    backgroundColor: "#DBCDB9",
    width: "100%",
    height : "100%",
    
    },
    
    lista: {
      height: "80%",
      width: "80%",
      marginTop: "15%",
      marginLeft: "10%",
      marginRight: "10%",
      marginBottom: "30%",
    },
    
    containerEventos: {
    
    backgroundColor: "orange",
    height: 150,
    margin: '3%',
    alignItems: "center",
    borderRadius: 10,
    borderWidth:1
    
    },
    
    titleEventos: {
      color: 'white',
      fontSize: 20,
      fontWeight: "bold",
    },
   
    viewBotoes :{
      flex:1,
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },

      botao1: {
        width: '25%',
        height: '25%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:'10%',
        borderRadius: 10,
        backgroundColor: 'red',
             
      },

      botao2: {
        width: '25%',
        height: '25%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'10%',
        borderRadius: 10,
        backgroundColor: 'red',
             
      },
      textoBotao: {
        fontSize: 40,
      }
    });