import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

type Props = {
  snap: Array<String>
}

function Results({ snap }: Props) {
  return (
    <View style={styles.results}>
      <View style={styles.columns}>
      <Text style={styles.text}>Nome: {snap[0]}</Text>
      <Text style={styles.text}>Gênero: {snap[1]}</Text>
      <Text style={styles.text}>Data de Nasc.: {snap[2]}</Text>
      </View>
      <View style={styles.columns}>
        <Text style={styles.text}>Usuário: {snap[3]}</Text>
        <Text style={styles.text}>E-mail: {snap[4]}</Text>
        <Text style={styles.text}>E-mail confirmado: {snap[5]}</Text>
      </View>
      <View style={styles.columns}>
        <Text style={styles.text}>Senha: {snap[6]}</Text>
        <Text style={styles.text}>CPF: {snap[7]}</Text>
        <Text style={styles.text}>Idioma: {snap[8]}</Text>
      </View>
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
    <View style={styles.container}>
      <View style={{ height: "80%", alignItems: 'center',
    justifyContent: 'center', width: "100%" }}>
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
      </View>
      {shown?<Results snap={snap} />:null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
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
    marginBottom: 10
  }, 
  results: {
    flexDirection: "row",
    height: "20%",
    justifyContent: "center",
    width: "100%"
  },
  columns: {
    height: "100%",
    width: "28%",
    marginHorizontal: 10,
  },
  text: {
     textAlign: "center",
     marginBottom: 10
  }
});
