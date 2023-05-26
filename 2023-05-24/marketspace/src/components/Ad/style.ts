import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    touch: {
      height: "100%",
      width: "100%",
      flexDirection: "row",
      alignItems: "center"
    },
    title: {
        fontSize: 15, 
        fontWeight: 'bold',
        color: "#000",
        marginLeft: 10,
    },
    price: {
      color: "#647ac6",
      fontSize: 30,
    }
  });

  export default styles;