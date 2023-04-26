import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
  } from 'react-native';
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#303030',
      alignItems: 'center',
      justifyContent: 'center',
      color: "#fff"
    },
    title: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 500,
    },
    dockitem: {
      width: "25%",
      alignItems: 'center',
      justifyContent: 'center',
    },
    icons: {
      width: 25,
      resizeMode: 'contain',
      margin: 5
    },
    nav: {
      backgroundColor: "#4f58c4",
      alignItems: 'center',
      flexDirection: 'row',
      width: "100%",
      height: '7%',
      paddingHorizontal: 15,
      alignSelf: "flex-start",
      position: "absolute",
      top: 0
    },
    dock: {
      backgroundColor: "#4f58c4",
      flexDirection: 'row',
      width: "100%",
      height: '10%',
      alignSelf: "flex-end",
      position: "absolute",
      bottom: 0
    },
  });

export class Transfer extends Component {
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={styles.title}>Início</Text>
          <View style={{ position: "absolute", right: 20, flexDirection: "row" }}>
            <Image source={require("../../assets/plus.png")} style={styles.icons} />
          </View>
        </View>
        <Text style={{color: "#a0a5d2", width: "60%", fontSize: 25}}>Essa aba é usada para navegar pela árvore do diretório de um usuário. 
        
        Para começar a fazer uma pesquisa na aba de pesquisa ou toque em '+'.</Text>
        <View style={styles.dock}>
          <View style={styles.dockitem}>
            <Image source={require("../../assets/home.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
            <Text style={{ color: "#fff" }}>Início</Text>
          </View>
          <View style={styles.dockitem}>
            <Image source={require("../../assets/search.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
            <Text style={{ color: "#fff" }}>Pesquisar</Text>
          </View>
          <View style={styles.dockitem}>
            <Image source={require("../../assets/transfer.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
            <Text style={{ color: "#fff" }}>Transferências</Text>
          </View>
          <View style={styles.dockitem}>
            <Image source={require("../../assets/folder.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
            <Text style={{ color: "#fff" }}>Explorar</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Transfer;