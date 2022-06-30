import { Dimensions, StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions"

export const styles = StyleSheet.create({
    details: {
        marginVertical: vh(25),
        flexDirection: 'row',
        paddingHorizontal: vw(25),
        alignItems: 'center',
    },
    profilePic: {
        width: vw(55),
        height: vh(55),
        borderRadius: 40,
        borderColor: '#97d9fd',
        borderWidth: 1,
        overflow: 'hidden',
    },

    profileDetails: {
        height: vh(55),
        marginLeft: vw(15),
        justifyContent: 'space-evenly',
    },
    personName: {
        color: '#333',
        fontWeight: '500',
        fontSize: 16,
    },
    personAddress: {
        color: '#333',
        fontSize: 12,
    },
})