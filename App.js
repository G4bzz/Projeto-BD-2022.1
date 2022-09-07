import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaAdicao from './tela-adicao/components/tela-adição';

export default function App() {
  return (
    <View style={styles.container}>
          <TelaAdicao></TelaAdicao>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})