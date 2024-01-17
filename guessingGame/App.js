import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/gameOverScreen';
import Colors from './constants/color';


SplashScreen.preventAutoHideAsync();


export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/Oswald-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/Oswald-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler}/>;

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  if (userNumber) {
    screen = <GameScreen 
      userNumber={userNumber} 
      onGameOver={gameOverHandler}
      />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen 
      userNumber={userNumber} 
      roundsNumber={guessRounds} 
      onStartNewGame={startNewGameHandler}
    />;
  }

  return (
    <>
      <LinearGradient 
        colors={[Colors.primary700, Colors.accent500]} 
        style={styles.rootScreen}
        onLayout={onLayoutRootView}
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
