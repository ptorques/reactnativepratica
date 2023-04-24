import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.title}>Início</Text>
        <View style={{ position: "absolute", right: 20, top: 20, flexDirection: "row" }}>
          <Image source={require("./assets/group.png")} style={styles.icons} />
          <Image source={require("./assets/settings.png")} style={styles.icons} />
          <Image source={require("./assets/threedots.png")} style={styles.icons} />
        </View>
      </View>
      <Text style={{ fontSize: 40, color: "#bbc0f8", marginBottom: 30 }}>Entrar</Text>
      <TextInput style={styles.textinput} placeholder={"Nome de usuário"} placeholderTextColor={"#bbc0f8"}></TextInput>
      <TextInput style={styles.textinput} placeholder={"Senha"} placeholderTextColor={"#bbc0f8"}></TextInput>
      <TouchableOpacity style={styles.button}><Text style={{ color: "#87888e" }}>ENVIAR</Text></TouchableOpacity>
      <Text style={{color: "#fff", marginTop: 30}}>Não tem uma conta? Basta digitar um nome de usuário exclusivo e um será criado para você.</Text>
      <View style={styles.dock}>
        <View style={styles.dockitem}>
          <Image source={require("./assets/home.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
          <Text style={{ color: "#fff" }}>Início</Text>
        </View>
        <View style={styles.dockitem}>
          <Image source={require("./assets/search.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
          <Text style={{ color: "#fff" }}>Pesquisar</Text>
        </View>
        <View style={styles.dockitem}>
          <Image source={require("./assets/transfer.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
          <Text style={{ color: "#fff" }}>Transferências</Text>
        </View>
        <View style={styles.dockitem}>
          <Image source={require("./assets/folder.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
          <Text style={{ color: "#fff" }}>Explorar</Text>
        </View>
      </View>
    </View>
  );
}

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
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: "60%",
    backgroundColor: "#3d4177"
  },
  textinput: {
    width: '80%',
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderColor: '#808080',
    borderRadius: 5,
    margin: 10,
  },
  nav: {
    backgroundColor: "#4f58c4",
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%",
    height: '10%',
    paddingTop: 20,
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