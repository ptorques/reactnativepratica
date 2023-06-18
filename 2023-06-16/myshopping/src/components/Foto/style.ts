import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: "40%",
      width: "80%",
      alignItems: 'center',
      flexDirection: "row",
      justifyContent: 'center',
      backgroundColor: "#BBB"
    },
    touch: {
      height: "100%",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#BBB"
    },
    title: {
        fontSize: 15, 
        fontWeight: 'bold',
        color: "#000",
        marginLeft: 10,
    },
    subtitle: {
      color: "#444",
      fontSize: 10,
      marginLeft: 10,
    },
    edit: {
      padding: 10,
      backgroundColor: "#27b56b",
      borderRadius: 3
    }, 
    delete: {
      padding: 10,
      backgroundColor: "#e11808",
      borderRadius: 3
    }
  });

  export default styles;