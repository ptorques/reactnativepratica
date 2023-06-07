import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles'


export class C extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela C</Text>

      </View>
    );
  }
}

export default C;