import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native'

export function ScreenA() {
  const navigation = useNavigation()

  function openScreen(){
    navigation.navigate('ScreenB')
  }

  return (
    <View style={styles.container}>
      <Text>Testando Tela A</Text>
      <Button title='Ir para Tela B' color={"#0F0"}
      onPress={openScreen}/>
    </View>
  );
}