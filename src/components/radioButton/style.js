import { Dimensions, StyleSheet } from "react-native";
import { vh,vw} from '../../utils/dimensions'

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    radioFeild: {
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: vw(20),
        maxWidth: vw(width),
    },
    button: {
        borderWidth: 2,
        borderRadius: 10,
        height: vh(15),
        width: vw(15),
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOn: {
        height: vh(7),
        width: vw(7),
        backgroundColor: '#000000',
        borderRadius: 5,
    },
    buttonOff: {
        height: vh(7),
        width: vw(7),
        backgroundColor: '#00000000',
        borderRadius: 5,
    },
})