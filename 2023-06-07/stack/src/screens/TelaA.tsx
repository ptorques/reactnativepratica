import React  from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles'


const A = ({navigation}: {navigation: any}) => {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela A</Text>

          <TouchableOpacity style={styles.dockitem} onPress={() =>
            navigation.push('B')}
          >
            <Text style={{ color: "#fff" }}>B</Text>
          </TouchableOpacity>
      </View>
    );
}

export default A;