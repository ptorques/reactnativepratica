import { React, Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles.js'

export class Explore extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.nav}>
            <Text style={styles.title}>Explorar</Text>
            <View style={{ position: "absolute", right: 20, top: 20, flexDirection: "row" }}>
              <Image source={require("../../assets/plus.png")} style={styles.icons} />
            </View>
          </View>

          <View style={styles.body}>
            <Text style={{ color: "#a0a5d2", width: "60%", fontSize: 25 }}>Essa aba é usada para navegar pela árvore do diretório de um usuário.

              Para começar a fazer uma pesquisa na aba de pesquise ou toque em '+'.</Text>
          </View>

          <View style={styles.dock}>
            <TouchableOpacity style={styles.dockitem} onPress={() =>
              this.props.navigation.navigate('Início')}
            >
              <Image source={require("../../assets/home.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
              <Text style={{ color: "#fff" }}>Início</Text>
              <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dockitem} onPress={() =>
              this.props.navigation.navigate('Pesquisa')}
            >
              <Image source={require("../../assets/search.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
              <Text style={{ color: "#fff" }}>Pesquisar</Text>
              <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dockitem} onPress={() =>
              this.props.navigation.navigate('Transferências')}
            >
              <Image source={require("../../assets/transfer.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
              <Text style={{ color: "#fff" }}>Transferências</Text>
              <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dockitem} onPress={() =>
              this.props.navigation.navigate('Explorar')}
            >
              <Image source={require("../../assets/folder.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
              <Text style={{ color: "#fff", }}>Explorar</Text>
              <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff99" }}></View>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

export default Explore;