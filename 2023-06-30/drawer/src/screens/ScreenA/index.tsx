import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';


export function ScreenA() {

  return (
    <View style={styles.container}>
      <View style={styles.stuff}>
        <TextInput style={styles.inputs} placeholder={"Email"}/>
        <TextInput style={styles.inputs} placeholder={"Senha"}/>
        <TouchableOpacity style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}