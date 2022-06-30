import { StyleSheet } from "react-native";
import { vw } from "../../utils";


export const styles = StyleSheet.create({
    barContainer: {
        height: vw(60),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF00',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icon: {
        width: vw(20),
        height: vw(20),
        resizeMode: 'contain',
    },
    button: {
        height: vw(70),
        width: vw(154),
        paddingTop: vw(15),
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    floatButton: {
        position: 'absolute',
        left: vw(161),
        bottom: vw(30),
        zIndex: 1,
        height: vw(68),
        width: vw(68),
        borderRadius: 40,
        backgroundColor: '#0032AF',
        borderColor: '#42AAFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    floatIcon: {
        width: vw(30),
        height: vw(30),
        resizeMode: 'contain',
    },
})