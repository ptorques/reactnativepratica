import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';


export default function Login( {navigation}: {navigation: any} ) {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.title}>MyShopping</Text>
                <Text style={styles.subtitle}>monte sua lista de compras te ajudar nas compras</Text>
                <TextInput style={styles.TextInput} placeholder='Email' />
                <TextInput style={styles.TextInput} placeholder='Senha' />
                <TouchableOpacity onPress={() => 
                navigation.navigate("Produtos")} style={styles.button}><Text style={{ color: "#fff", fontSize: 15, fontWeight: 'bold' }}>Entrar</Text></TouchableOpacity>
                <View style={styles.opt}>
                    <Text style={styles.link}>Recuperar Senha</Text>
                    <Text style={styles.link}>Criar minha conta</Text>
                </View>
            </View>
        </>
    );
}