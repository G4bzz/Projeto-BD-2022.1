import {View,Text,TouchableOpacity,SafeAreaView,FlatList} from 'react-native'
import styles from "./telaListagemCSS"

const Eventos = [];

function TelaListagem({route,navigation}) {

    const matPar = route.params.mat;
    console.log(matPar)
    let tamanho = Eventos.length;
    let info = new Object();
    info.id = tamanho;
    info.nome = route.params?.nome;
    info.desc = route.params?.desc;
    info.local = route.params?.local;
    info.data = route.params?.data;
    info.hora = route.params?.hora;
    info.autor = route.params?.autor;
    info.cont = route.params?.cont;
  
    if (info.nome === undefined) {}
    else {Eventos.push(info);}

    return(
  
  <SafeAreaView style = {styles.container}>
    <FlatList style = {styles.lista}
    data = {Eventos}
    keyExtractor = {(item) => item.id}
    renderItem = {({item}) => 
      <View style = {styles.containerEventos}>
          <Text 
          onPress = {() => navigation.navigate("Detalhes",{item})} 
          style = {styles.titleEventos}> {item.nome} 
          </Text>
      </View>
  
    }
    />
    <View style = {styles.viewBotao}>
    <TouchableOpacity
            onPress = {() => navigation.navigate("Adicao")}
            style={styles.botao}>
            <Text style = {styles.textoBotao}>+</Text>
    </TouchableOpacity>
  
    </View>
  
  </SafeAreaView> 
  
  )
  
  
  }

  export default TelaListagem;