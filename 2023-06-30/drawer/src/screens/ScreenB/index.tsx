import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';


export function ScreenB() {

    return (
        <View style={styles.container}>
            <View style={styles.stuff}>
                <TextInput style={styles.inputs} placeholder={"Nome"} />
                <TextInput style={styles.inputs} placeholder={"Email"} />
                <TextInput style={styles.inputs} placeholder={"Número de Telefone"} />
                <TextInput style={styles.inputs} placeholder={"Senha"} />
                <TouchableOpacity style={styles.button}>
                    <Text>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}