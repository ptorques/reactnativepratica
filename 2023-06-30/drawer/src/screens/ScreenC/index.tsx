import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';


export function ScreenC() {

    return (
        <View style={styles.container}>
            <View style={styles.add}>
                <Feather name="camera-off" size={50} color="#F9D949"/>
                <Text style={styles.text}>Você ainda não tem arquivos</Text>
            </View>
        </View>
    );
}