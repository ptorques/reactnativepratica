import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#edecee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subtitle: {
        fontSize: 15,
        color: "#c7c7c7",
        textAlign: "center"
    },
    upload: {
      flex: 2,
      margin: 20
    },
    border: {
      height: 300,
      width: 300,
      borderStyle: "dashed",
      borderWidth: 3,
      borderColor: "#c7c7c7",
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    }
  });

  export default styles;