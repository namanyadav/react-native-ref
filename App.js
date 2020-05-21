import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        <TextInput placeholder="Course Goal" style={styles.textinput}/>
        <Button title="Add"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      padding: 50
  },
    flexbox : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textinput : {
      borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    }
});
