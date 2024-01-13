import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <>
      <LinearGradient 
        colors={['#4e0329', '#ddb52f']} 
        style={styles.rootScreen}
      >
        <ImageBackground 
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  }
});
