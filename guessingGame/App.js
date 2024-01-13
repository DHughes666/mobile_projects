import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/startGameScreen';

export default function App() {
  return (
    <>
      <LinearGradient 
        colors={['#4e0329', '#ddb52f']} 
        style={styles.rootScreen}
      >
        <StartGameScreen />
      </LinearGradient>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
