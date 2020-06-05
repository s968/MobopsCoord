import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, ToastAndroid} from 'react-native';
import Navigator from './routes/homeStack'


export default function App() {

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

  return (
    <Navigator/>
  );
}


