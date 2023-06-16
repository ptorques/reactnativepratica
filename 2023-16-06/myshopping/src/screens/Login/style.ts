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
        marginTop: 10,
        color: "#827ddc"
    },
    subtitle: {
        fontSize: 15, 
        marginBottom: "10%",
        color: "#827ddc"
    },
    button: {
      width: "80%",
      backgroundColor: '#2ab76c',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    opt:  {
      flexDirection: "row",
      width: "80%",
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30
    },
    link: {
      fontWeight: "bold"
    }
  });

  export default styles;