import { StyleSheet } from "react-native";
import { vh,vw} from '../../utils/dimensions'
import {width} from './index'


export const styles = StyleSheet.create({
    checkComponent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBox: {
        height: vh(20),
        width: vw(20),
        resizeMode: 'contain',
    },
    checkButton: {
        // width: vw(25),
        height: vh(25),
        alignItems: 'center',
        justifyContent: 'center',
    },
})