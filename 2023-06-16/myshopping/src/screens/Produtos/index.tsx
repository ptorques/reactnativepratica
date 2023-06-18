import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import ImageUpload from '../../components/ImageUpload';
import Foto from '../../components/Foto';


export default function Produtos( {navigation}: {navigation: any} ) {
    let fotos:string[] = ["Foto 1", "Foto 2", "Foto 3"]

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
                renderItem={({item}) => <Foto nome={fotos[fotos.indexOf(item)]}></Foto>}>
                </FlatList>
            </View>
        </>
    );
}