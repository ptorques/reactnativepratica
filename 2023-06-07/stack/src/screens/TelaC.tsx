import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles'


const C = ({navigation}: {navigation: any}) => {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela C</Text>

          <TouchableOpacity style={styles.dockitem} onPress={() =>
            navigation.push('A')}
          >
            <Text style={{ color: "#fff" }}>A</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
      </View>
    );
}

export default C;