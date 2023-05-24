import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function Login( {navigation}: {navigation: any} ) {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Image source={require("../../../assets/logo.png")} />
                <Text style={styles.title}>marketspace</Text>
                <Text style={styles.subtitle}>Seu espaço de compra e venda</Text>
                <Text>Acesse sua conta</Text>
                <TextInput style={styles.TextInput} placeholder='Email' />
                <TextInput style={styles.TextInput} placeholder='Senha' />
                <TouchableOpacity style={styles.button}><Text style={{ color: "#fff", fontSize: 15, fontWeight: 'bold' }}>Entrar</Text></TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text>Ainda não tem acesso?</Text>
                <TouchableOpacity onPress={() => 
                navigation.navigate("Sign")} 
                style={styles.buttonSign}><Text style={{ color: "#000", fontSize: 15, fontWeight: 'bold' }}>Criar uma conta</Text></TouchableOpacity>
            </View>
        </>
    );
}