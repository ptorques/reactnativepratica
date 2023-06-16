import { Text, Image, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import React, { useState } from 'react';
import Ad from '../../components/Ad';
import { AntDesign } from '@expo/vector-icons';

export default function Ads() {
    class Product {
        nome: string;
        image: string;
        price: number;
        constructor(nome: string, image: string, price: number) {
            this.nome = nome
            this.image = image
            this.price = price
        }
    }

    const p1 = new Product("Tênis", require('../../../assets/produto1.png'), 60)
    const p2 = new Product("Bicicleta", require('../../../assets/produto2.png'), 415)
    const p3 = new Product("Escrivaninha", require('../../../assets/produto3.png'), 260)
    const p4 = new Product("Sofá", require('../../../assets/produto4.png'), 896)
    const p5 = new Product("Luminária", require('../../../assets/produto5.png'), 30)
    const p6 = new Product("Camiseta", require('../../../assets/produto6.png'), 45)

    const products = [p1, p2, p3, p4, p5, p6]


    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Image source={require("../../../assets/logo.png") } style={{marginTop: "15%"}} />
                <Text style={styles.title}>marketspace</Text>
                <Text style={styles.subtitle}>Seu espaço de compra e venda</Text>
                <FlatList
                data={products}
                renderItem={({item}) => (
                    <Ad
                    nome={item.nome}
                    image={item.image}
                    price={item.price}
                    />
                )
                }
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                      <AntDesign name="disconnect" size={80} color="black" style={{ margin: 15 }}/>
                      <Text style={styles.listEmptyText}>
                        Você ainda não tem tarefas cadastradas
                      </Text>
                      <Text style={{
                        color: '#888888',
                        fontSize: 14,
                        textAlign: 'center'
                      }}>
                        Crie tarefas e organize seus itens a fazer
                      </Text>
                    </View>
                  )
                }   
                />
            </View>
        </>
    );
}