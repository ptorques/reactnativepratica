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
                <Image source={require("../../../assets/logoCadastro.png")} />
                <TextInput style={styles.TextInput} placeholder='Nome' />
                <TextInput style={styles.TextInput} placeholder='Email' />
                <TextInput style={styles.TextInput} placeholder='Telefone' />
                <TextInput style={styles.TextInput} placeholder='Senha' />
                <TextInput style={styles.TextInput} placeholder='Confirme a senha' />
                <TouchableOpacity style={styles.button}><Text style={{ color: "#fff", fontSize: 15, fontWeight: 'bold' }}>Entrar</Text></TouchableOpacity>
            </View>
        </>
    );
}