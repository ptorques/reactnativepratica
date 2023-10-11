import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [user, setUser] = useState("")
  const [repos, setRepos] = useState<any>([])

  function get() {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data)
        console.log(repos)
      })
      .catch((error) => {
        console.error('Ocorreu um erro na solicitação: ' + error);
      });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listador de Repositórios</Text>
      <TextInput style={styles.input} placeholder='Nome do Usuário' value={user} onChangeText={(e) => setUser(e)}></TextInput>
      <TouchableOpacity style={styles.btn} onPress={get}>
        <Text>Pesquisar</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={repos}
        renderItem={(
          ({ item }) => (
            <View style={styles.repo}>
              <Text style={styles.info}>Nome: {item.name}</Text>
              <Text style={styles.info}>Privacidade: {item.private ? "Privado" : "Público"}</Text>
              <Text style={styles.info}>Estrelas: {item.stargazers_count}</Text>
              <Text style={styles.info}>Criado em: {item.created_at}</Text>
              <Text style={styles.info}>Último push: {item.pushed_at}</Text>
              <Text style={[styles.info, { marginBottom: 0 }]}>URL: {item.html_url}</Text>
            </View>
          )
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 30
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "70%",
    backgroundColor: "#FD0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  input: {
    width: "75%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  list: {
    width: "75%",

  },
  repo: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  info: {
    fontSize: 15,
    marginBottom: 10
  }
});
