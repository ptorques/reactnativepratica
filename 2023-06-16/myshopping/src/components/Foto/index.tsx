import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    nome: string;
    local: string;
}

export default function Foto({ nome, local }: Props) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{nome}</Text>
                <Text style={styles.subtitle}>{local}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.edit}><MaterialIcons name="remove-red-eye" size={24} color="white" /></TouchableOpacity>
                <TouchableOpacity style={styles.delete}><MaterialIcons name="delete" size={24} color="white" /></TouchableOpacity>
            </View>
        </View>
    );
}