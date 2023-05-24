import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function Signin() {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Image source={require("../../../assets/logo.png")} style={{width: 60, resizeMode: 'contain'}} />
                <Text style={styles.title}>Boas vindas!</Text>
                <Text style={styles.subtitle}>Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
                <Image source={require("../../../assets/logoCadastro.png")} style={{width: 90, resizeMode: 'contain', marginBottom: 10}}/>
                <TextInput style={styles.TextInput} placeholder='Nome' />
                <TextInput style={styles.TextInput} placeholder='Email' />
                <TextInput style={styles.TextInput} placeholder='Telefone' />
                <TextInput style={styles.TextInput} placeholder='Senha' />
                <TextInput style={styles.TextInput} placeholder='Confirme a senha' />
                <TouchableOpacity style={styles.buttonSign}><Text style={{ color: "#fff", fontSize: 15, fontWeight: 'bold' }}>Criar</Text></TouchableOpacity>
                <Text style={{ marginTop: 35, marginBottom: 5}}>Já tem uma conta?</Text>
                <TouchableOpacity style={styles.button}><Text style={{ color: "#000", fontSize: 15, fontWeight: 'bold' }}>Ir para o login</Text></TouchableOpacity>
            </View>
        </>
    );
}