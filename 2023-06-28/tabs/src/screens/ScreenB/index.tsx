import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native'


export function ScreenB() {
    const navigation = useNavigation()

    function openScreen() {
        navigation.navigate('ScreenA')
    }

    return (
        <View style={styles.container}>
            <Text>Testando Tela B</Text>
            <Button title='Ir para Tela A' color={"#F00"} 
            onPress={openScreen}/>
        </View>
    );
}