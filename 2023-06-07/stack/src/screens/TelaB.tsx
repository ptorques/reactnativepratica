import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles'


const B = ({navigation}: {navigation: any}) => {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela B</Text>


          <TouchableOpacity style={styles.dockitem} onPress={() =>
            navigation.push('C')}
          >
            <Text style={{ color: "#fff" }}>C</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
      </View>
    );
}

export default B;