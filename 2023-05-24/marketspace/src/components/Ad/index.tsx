import { Text, Image, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import React, { useState } from 'react';

type Props = {
    nome: string;
    image: string;
    price: number;
}

export default function Ad({nome, image, price}: Props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch}>
                <Image source={image}/> 
                <Text style={styles.title}>{ nome }</Text>
                <Text style={styles.price}>{ price }</Text>
            </TouchableOpacity>
        </View>
    );
}