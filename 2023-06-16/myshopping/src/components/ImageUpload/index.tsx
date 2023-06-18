import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

const ImageUpload = () => {

    return (
            <TouchableOpacity style={styles.border} onPress={() => { }}>
                <Text style={styles.subtitle}>clique para adicionar ou para trocar a foto</Text>
            </TouchableOpacity>
    );
};

export default ImageUpload;
