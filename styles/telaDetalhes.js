import { Button, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get('window').width;

export default StyleSheet.create(
	{
		header:{
			width: width*0.8,
			height: 60,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#B9B7BD',
			borderTopLeftRadius: 15,
			borderTopRightRadius: 15
		},
		h1:{
			fontSize: 32,
			color: "#000"
		},
		button:{
			alignSelf: 'center'
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
			backgroundColor: '#EEEDE7',
			borderBottomLeftRadius: 15,
			borderBottomRightRadius: 15,
			marginBottom: 30,
			padding: 15
		}
	}	
)