import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function ButtonPage({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('GroceryList');
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={pressHandler}>
          <Text style={styles.buttonText}>Show the List</Text>
        </TouchableOpacity>
      </View>
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

  buttonContainer: {
    width: 250,
    height: 'auto',
  },

  touchableOpacity: {
    margin: 'auto',
    padding: 50,
    backgroundColor: '#88f7a6',
  },

  buttonText: {
    textAlign: 'right',
    textAlignVertical: 'center',
    fontFamily: 'monospace',
    fontSize: 50,
  }
});
