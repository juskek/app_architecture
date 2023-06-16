import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SharedCounterOne from './src/view/shared-counter-one/SharedCounterOne';
import SharedCounterTwo from './src/view/shared-counter-two/SharedCounterTwo';

export default function App() {
  return (
    <View style={styles.container}>
      <SharedCounterOne/>
      <SharedCounterTwo/>
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
