import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20
    },
    input: {
        width: "60%",
        backgroundColor: "#FFF",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    },
    btn: {
        width: "60%",
        backgroundColor: "#F00",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 20,
        color: "#FFF",
    },
    display: {
        width: "60%",
        textAlign: "center",
        marginBottom: 20
    }
});

export default styles