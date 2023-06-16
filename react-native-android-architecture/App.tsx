import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/view/counter/Counter';
import OtherCounter from './src/view/other_counter/OtherCounter';
import { useContext } from 'react';
import { CounterRepositoryContext } from './src/data/counter/ICounterRepository';

export default function App() {
  const { init } = useContext(CounterRepositoryContext);
  init();

  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Counter/>
      <OtherCounter/>
      <StatusBar style="auto" />
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
