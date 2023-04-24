import {
  StyleSheet,
  Image,
  View,
  TextInput,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.nav}>
          <Image source={require('./assets/camera.png')} style={styles.icons} />
          <Image
            source={require('./assets/threedots.png')}
            style={styles.icons}
          />
      </View>
      <Image
        source={require('./assets/640px-GoogleLogoSept12015.png')}
        style={styles.logo}
      />
      <TextInput style={styles.TextInput} placeholder="Search or type URL" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 0.5,
    borderColor: '#808080',
    borderRadius: 5,
  },
  logo: {
    width: 250,
    resizeMode: 'contain',
  },
  icons: {
    width: 40,
    resizeMode: 'contain',
    margin: 10,
  },
  nav: {
    flexDirection: 'row',
    height: '10%',
    alignSelf: "flex-end",
    position: "absolute",
    top: 20
  },
});
