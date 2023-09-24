import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';

export default function Home() {
    const [nomes, setNomes] = useState<string[]>([
        "Ana Maria",
        "Bruno  Alves",
        "Carlos José",
        "Daniel Martins",
        "Efraim Gomes",
        "Francisco Junior"])
    const [novoNome, setNovoNome] = useState("")
    const [sendRequest, setSendRequest] = useState(6)
    
    // o useEffect é completamente desnecessario aqui honestamente eu podia estar fazendo isso num handle do botao
    useEffect(() => {
        setNomes([...nomes, novoNome])
    }, [sendRequest])

    function ListNomes(){
        return(
            <View style={styles.display}>
                {/* puta xaxixo mas esse não é o use case do useEffect entao vou deixar assim */}
                {nomes.map(nome => nome ? <Text key={Math.random()}>{nome}</Text> : null)}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de presença</Text>
            <TextInput style={styles.input} placeholder='Insira seu nome aqui' 
            onChangeText={(e) => setNovoNome(e)}
            value={novoNome}/>
            <TouchableOpacity style={styles.btn}
            onPress={() => setSendRequest(sendRequest + 1)}>
                <Text style={styles.btnText}>Registrar</Text>
            </TouchableOpacity>
            <ListNomes></ListNomes>
            <Text>Número de presentes: {sendRequest}</Text>
        </View>
    );
}

