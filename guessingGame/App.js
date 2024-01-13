import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import Colors from './constants/color';

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
        colors={[Colors.primary700, Colors.accent500]} 
        style={styles.rootScreen}
      >
        <ImageBackground 
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
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
