import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

type Props = {
  snap: Array<String>
}

function Results({ snap }: Props) {
  return (
    <View>
      <Text>{snap[0]}</Text>
      <Text>{snap[1]}</Text>
      <Text>{snap[2]}</Text>
      <Text>{snap[3]}</Text>
      <Text>{snap[4]}</Text>
      <Text>{snap[5]}</Text>
      <Text>{snap[6]}</Text>
      <Text>{snap[7]}</Text>
      <Text>{snap[8]}</Text>
    </View>
  )
}

export default function App() {
  const [shown, setShown] = useState(false)
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [birth, setBirth] = useState("")
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [pass, setPass] = useState("")
  const [cpf, setCpf] = useState("")
  const [lang, setLang] = useState("")
  const [snap, setSnap] = useState(Array<String>)


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.input} placeholder='Nome' value={name} onChangeText={e => setName(e)}></TextInput>
      <TextInput style={styles.input} placeholder='Gênero' value={gender} onChangeText={e => setGender(e)}></TextInput>
      <TextInput style={styles.input} placeholder='Data de nascimento' value={birth} onChangeText={e => setBirth(e)}></TextInput>
      <TextInput style={styles.input} placeholder='Usuário' value={user} onChangeText={e => setUser(e)}></TextInput>
      <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={e => setEmail(e)}></TextInput>
      <TextInput style={styles.input} placeholder='Confirmar e-mail' value={confirmEmail} onChangeText={e => setConfirmEmail(e)}></TextInput>
      <TextInput style={styles.input} placeholder='Senha' value={pass} onChangeText={e => setPass(e)}></TextInput>
      <TextInput style={styles.input} placeholder='CPF' value={cpf} onChangeText={e => setCpf(e)}></TextInput>
      <TextInput style={styles.input} placeholder='Idioma' value={lang} onChangeText={e => setLang(e)}></TextInput>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          let namel = name
          let genderl = gender
          let birthl = birth
          let userl = user
          let emaill = email
          let confirmEmaill = confirmEmail
          let passl = pass
          let cpfl = cpf
          let langl = lang
          setSnap([namel, genderl, birthl, userl, emaill, confirmEmaill, passl, cpfl, langl])
          setShown(true)
        }}
      ><Text style={{ color: "#FFF", fontSize: 20 }}>Cadastrar</Text></TouchableOpacity>
      {shown ? <Results snap={snap}></Results> : null}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "80%",
    height: "7%",
    borderWidth: 2,
    borderColor: "#A0A0A0",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15
  },
  button: {
    width: "80%",
    height: "7%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0a95ff",
    borderRadius: 10,
    marginBottom: 15
  }
});
