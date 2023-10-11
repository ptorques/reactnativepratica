import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";

export default function Home(){

    const [data, setData] = useState<string[]>([
            'Ana Maria Braga', 'Breno de Souza Faria', 'Carlos Alves Pareira',
            'Daniel de Maria Prio', 'João Carlos da Silva','Ana Maria Pereira',
            'Pedro Henrique Santos', 'Maria Luiza Oliveira','José Antonio Costa',
            'Carla Beatriz Lima','Paulo Roberto Sousa','Laura Fernanda Silva',
            'André Luiz Santos', 'Camila Regina Pereira', 'Ricardo Almeida Costa'
        ]);

    return(
        // <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Presença</Text>
                
                <Text style={styles.itemList} >
                    Camila Regina Pereira
                </Text>      
              
                {
                    data.map(item => (
                        <Text 
                            key={item}
                            style={styles.itemList}                            
                        >
                            { item }
                        </Text>
                    ))
                }
                
            </View>
        // </ScrollView>
    )
}