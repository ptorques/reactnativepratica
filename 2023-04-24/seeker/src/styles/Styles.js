import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#fff"
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 500,
    },
    dockitem: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons: {
        width: 25,
        resizeMode: 'contain',
        margin: 5
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 10,
        marginBottom: "60%",
        backgroundColor: "#3d4177"
    },
    textinput: {
        width: '65%',
        backgroundColor: '#1e1e1e',
        padding: 10,
        borderColor: '#808080',
        borderRadius: 5,
        margin: 10,
    },
    nav: {
        backgroundColor: "#4f58c4",
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
        height: '10%',
        paddingTop: 20,
        paddingHorizontal: 15,
        alignSelf: "flex-start",
    },
    dock: {
        backgroundColor: "#4f58c4",
        flexDirection: 'row',
        width: "100%",
        height: '9%',
        alignSelf: "flex-end",
    },
    body: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
});