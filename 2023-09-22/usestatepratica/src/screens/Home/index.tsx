import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleUserAdd() {
        console.log(
            "Nome completo: " + name
            +"\nE-mail: " + email
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                onChangeText={(e) => setName(e)}
                value={name}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={(e) => setEmail(e)}
                value={email}
            />

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}