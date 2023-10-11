import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1E25',
        
        flex: 1,
        alignItems: 'center',        
        justifyContent: 'center',
    },

    body:{
        flex: 1,        
        width: '80%',
        marginLeft: 80,
    },

    title:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',

        marginTop: 50,
        paddingBottom: 10,
    },

    itemList:{
        color: '#000',
        backgroundColor: "#ffe",
        borderRadius: 5,
        fontWeight: "400",

        width: '60%',
        margin: 10,
        padding: 10,
    },

    listEmptyText:{
        color: '#000',
        backgroundColor: "#fee",
        fontWeight: "400",

        width: '65%',
        margin: 10,
        padding: 10,

    }
});