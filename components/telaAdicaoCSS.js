import {StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get('window').width;


export default StyleSheet.create({
    formTextInput:{
        flex:1,
        width:"90%",
        marginLeft:'5%',
        marginRight:'5%',
        borderWidth:1,
        alignItems:'center',
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    textButtonCadastrar:{
        flex:1,
        width:"90%",
        marginLeft:'5%',
        marginRight:'5%',
        alignItems:'center',
        borderRadius:50,
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },

})