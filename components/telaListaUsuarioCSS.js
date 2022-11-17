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
    height: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    
    },
    
    titleEventos: {
      color: 'white',
      fontSize: 20,
      fontWeight: "bold",
    },
  
    viewBotao: {
    
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
    width: "100%",
    height:100,
    top:"85%",
    },
    
      botao: {
        width: 80,
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'red',
        position: "absolute",
    
        
      },
      textoBotao: {
        fontSize: 18,
      }
    });