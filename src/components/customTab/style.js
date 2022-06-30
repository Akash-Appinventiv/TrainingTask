import { StyleSheet } from "react-native";
import { vw } from "../../utils";


export const styles = StyleSheet.create({
    barContainer: {
        borderColor: '#FFFFFF', 
        borderWidth: 2, 
        borderRadius: 8, 
        flexDirection: 'row', 
        width: vw(300), 
        alignSelf: 'center',
        overflow: 'hidden',
    },
    tab: {
        width: vw(150), 
        paddingVertical: vw(10), 
        borderRadius: 5, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    tabText: {
        fontWeight: '600',
        color: '#FFFFFF',
    },
})