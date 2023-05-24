import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#edecee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextInput: {
      width: "80%",
      backgroundColor: "#f7f7f8",
      padding: 15,
      borderRadius: 8,
      marginVertical: 10
    },
    title: {
        fontSize: 30, 
        fontWeight: 'bold',
        marginTop: 10
    },
    subtitle: {
        fontSize: 15, 
        fontWeight: '100',
        marginBottom: "10%"
    },
    button: {
      width: "80%",
      backgroundColor: '#647ac6',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "10%"
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "30%",
        backgroundColor: "#f7f7f8"
    },
    buttonSign: {
        width: "80%",
        backgroundColor: '#d9d8da',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
      },
  });

  export default styles;