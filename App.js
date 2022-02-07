import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// div => View, span => Text
const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",        
  },
  text: {
    fontSize: 48,
  }
});

export default App;
