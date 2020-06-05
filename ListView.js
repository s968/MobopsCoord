import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, ToastAndroid} from 'react-native';

export default function ListView() {

  const [groceries, setGroceries] = useState([
      {name: 'apple', key: '1'},
      {name: 'banana', key: '2'},
      {name: 'carrot', key: '3'},
      {name: 'dates', key: '4'},
      {name: 'eggs', key: '5'},
      {name: 'figs', key: '6'},
      {name: 'grapes', key: '7'},
      {name: 'honey', key: '8'},
      {name: 'ice cream', key: '9'},
      {name: 'jam', key: '10'},
      {name: 'kiwi', key: '11'},
      {name: 'lemon', key: '12'},
      {name: 'mango', key: '13'},
      {name: 'nuts', key: '14'},
      {name: 'oranges', key: '15'},
  ]);  

  const pressHandler = (name) => {
    console.log(name);
    ToastAndroid.show(name, ToastAndroid.SHORT);
  };


  return (
    <View style={styles.container}>
    <ScrollView>
        {groceries.map((item) =>{
            return (
                <View key={item.key}>
                  <TouchableOpacity onPress={() => pressHandler(item.name)}>
                    <Text style={styles.item}>{item.name}</Text>
                  </TouchableOpacity>  
                </View>
            )
        })}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#bff4ff',
    fontSize: 24,
    fontFamily: 'monospace',
    textAlign: 'center',
  }

});
