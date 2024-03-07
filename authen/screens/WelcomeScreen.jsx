import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth_context';

const WelcomeScreen = () => {
  const [fetchedMessage, setFetchedMessage] = useState('')

  const {token} = useContext(AuthContext)

  useEffect(() => {
    axios.get(
      'https://foodie-418d2-default-rtdb.firebaseio.com/message.json?auth=' +
        token
    ).then((response) =>{
      setFetchedMessage(response.data);
    });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
