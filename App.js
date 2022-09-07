import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaDetalhes from './components/tela-detalhes';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaDetalhes desc='Calourada de sexologia' local='DCE' data='09/09/2022' hora='19:00' autor='Biel da Faixa' cont='Descubra' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
