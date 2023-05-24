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
        fontSize: 20, 
        fontWeight: 'bold',
    },
    subtitle: {
        width: "80%", 
        fontSize: 12,
        marginBottom: "5%",
        color: "#3e3a40",
        textAlign: "center"
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