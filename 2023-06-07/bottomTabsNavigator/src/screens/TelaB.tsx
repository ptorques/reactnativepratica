import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles'


export class B extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela B</Text>

      </View>
    );
  }
}

export default B;