import {StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get('window').width;

export default StyleSheet.create(
	{
		containerPai:{
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor:'#D8BFD8'

		},
		header:{
			flex:1,
			width: width*0.8,
            marginLeft:"10%",
      		marginRight:"10%",
			height: 100,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#B9B7BD',
			borderTopLeftRadius: 15,
			borderTopRightRadius: 15,
			
		},
		h1:{
			fontSize: 32,
			color: "#000",
		},
		button:{
			alignSelf: 'center'
		},

		excluirEvento:{
			borderRadius:50,
			alignItems:"center",
			justifyContent:"center",
			width:"90%",
			backgroundColor:"#ff0043",
			paddingTop:14,
			paddingBottom:14,
			marginLeft:12,
			marginBottom:'1%'
		},
		
		comentario: {
			borderWidth: 1,
			height: '10%',
			alignItems:"center",
			justifyContent:"center",
			width:"90%",
			marginTop:'1%',
			marginBottom:'1%',
			backgroundColor:'white',
			color:'black',
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
			marginBottom:'1%'
		},
		boxList:{
			flexDirection:'row',
			justifyContent:'center'
		},
		listItems:{
			textAlign: 'left',
			textAlignVertical: 'center',
			fontSize: 16
		},
		container:{
      width: width*0.8,
      marginLeft:"10%",
      marginRight:"10%",
			backgroundColor: '#EEEDE7',
			borderBottomLeftRadius: 15,
			borderBottomRightRadius: 15,
			marginBottom: 30,
			padding: 15,
		}
	}	
)