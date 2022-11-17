import {StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get('screen').width;


export default StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        //alignItems:'center',
        flex:1,
        
    },

    title: {
        fontSize: 16,
        marginLeft: '2%',
    },

    formTextInput:{
        width:"90%",
        marginLeft:'5%',
        marginRight:'5%',
        borderWidth:1,
        alignItems:'center',
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:'6%',
        margin:12,
        paddingLeft:10,
    },
    textButtonCadastrar:{
        position:'relative',
        marginLeft:'40%',
        marginRight:'40%',
        width:"20%",
        height: '6%',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:50,
        backgroundColor:"#ff0043",
        marginTop:'2%',

    },
})