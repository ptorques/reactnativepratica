import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#edecee',
      alignItems: 'center',
      justifyContent: 'center',
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
    listEmptyText: {
        color: '#888888',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: "bold",
    },
    emptyList: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20
    }
  });

  export default styles;