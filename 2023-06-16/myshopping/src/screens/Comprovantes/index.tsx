import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import ImageUpload from '../../components/ImageUpload';
import Foto from '../../components/Foto';

export default function Comprovantes( {navigation}: {navigation: any} ) {
    class foto {
        nome: string;
        local: string;

        constructor(nome: string, local: string) {
            this.nome = nome,
            this.local = local
        }
    }
    
    let fotos:foto[] = [
        new foto("Foto 1", "images/foto1"), 
        new foto("Foto 2", "images/foto2"), 
        new foto("Foto 3", "images/foto3")
    ]

    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.upload}>
                    <ImageUpload></ImageUpload>
                    <Text style={styles.subtitle}>informações da foto</Text>
                </View>
                <FlatList
                data={fotos}
                renderItem={({item}) => <Foto nome={item.nome} local={item.local}></Foto>}>
                </FlatList>
            </View>
        </>
    );
}