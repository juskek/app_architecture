import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SharedCounterOne from './src/view/shared-counter-one/SharedCounterOne';
import SharedCounterTwo from './src/view/shared-counter-two/SharedCounterTwo';
import SoloCounter from './src/view/solo-counter/SoloCounter';
import User from './src/view/user/User';

export default function App() {
  return (
    <View style={styles.container}>
      <SoloCounter/>
      <SharedCounterOne/>
      <SharedCounterTwo/>
      <User/>
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
