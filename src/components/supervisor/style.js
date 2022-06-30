import { Dimensions, StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions"

export const styles = StyleSheet.create({
    supervisor: {
        marginVertical: vh(15),
        width: vw(355),
        marginHorizontal: vw(10),
        flexDirection: 'row',
        padding: 8,
        backgroundColor: '#f0f7ff',
        borderColor: '#97d9fd',
        borderWidth: 1,
        borderRadius: 10,
    },
    superText: {
        fontSize: 15,
        fontWeight: '500',
    },
    supervisorName: {
        fontSize: 15,
        fontWeight: '500',
        color: '#2ab2fc',
    },
})