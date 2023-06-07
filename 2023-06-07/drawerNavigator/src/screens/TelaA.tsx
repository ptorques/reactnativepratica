import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from '../styles/Styles'


export class A extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela A</Text>

      </View>
    );
  }
}

export default A;