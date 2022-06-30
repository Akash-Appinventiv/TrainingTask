import { StyleSheet } from "react-native";
import { screenHeight, vw } from "../../../../utils";


export const styles = StyleSheet.create({
    parentContainer: {
        height: vw(screenHeight),
        paddingTop: vw(70),
    },
    heading: {
        alignSelf: 'center',
        width: vw(300),
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 40,
        paddingBottom: vw(25),
    },
    topTabContainer: {
        height: vw(300), 
        width: vw(300), 
        alignSelf: 'center',
    },
})