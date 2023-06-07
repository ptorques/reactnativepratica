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
        fontWeight: "500",
    },
    dockitem: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dock: {
        backgroundColor: "#4f58c4",
        flexDirection: 'row',
        width: "100%",
        height: '9%',
        bottom: 0,
        position: "absolute",
    },
    body: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
});