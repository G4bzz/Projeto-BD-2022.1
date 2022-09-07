import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import Css from '../styles/telaDetalhes.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default function telaDetalhes(props){
	return(
		<View>
			<View style={Css.header}>
				<Text style={Css.h1}>EVENTO 1</Text>
			</View>
			<View style={Css.container}>
				<View style={Css.boxList}>
					<FlatList data={[
						{key: ['Descrição: ', props.desc]},
						{key: ['Local: ', props.local]},
						{key: ['Data: ', props.data]},
						{key: ['Horário: ', props.hora]},
						{key: ['Enviado por: ', props.autor]},
						{key: ['Contato: ', props.cont]}
					]} renderItem={({item}) => <Text style={Css.listItems}><Text style={{fontWeight: 'bold'}}>{item.key[0]}</Text>{item.key[1]}</Text>}/>
				</View>
			</View>
				<View style={Css.button}>
					<Button 
						title='Voltar'
						color='#88B2CC'
						accessibilityLabel='Retornar para a tela principal.'
						/>
				</View>
		</View>
	)
}