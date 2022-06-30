import { StyleSheet } from "react-native";
import { vw } from "../../../../utils";


export const styles = StyleSheet.create({
    font: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    parentContainer: {
        width: vw(298),
        marginVertical: vw(10),
        borderColor: '#FFFFFF44',
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})