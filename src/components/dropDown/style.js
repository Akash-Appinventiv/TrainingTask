import { StyleSheet, Dimensions } from "react-native"
import { vh, vw } from "../../utils/dimensions"

const {width,height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    parent: {
        zIndex: 1,
    },
    container: {
        width: vw(350),
        height: vh(50),
        borderWidth: 1,
        marginHorizontal: vw(12),
        borderColor: '#ccc',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: vw(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomArrow: {
        height: vh(20),
        width: vw(20),
    },
    modalView: {
        width: vw(width),
        height: vh(height),
        backgroundColor: '#00000065',
        justifyContent: "center",
    },
    menu: {
        backgroundColor: '#FFFFFF',
        width: vw(350),
        marginHorizontal: vw(12),
        position: 'absolute',
        borderRadius: 10,
        zIndex: 1,
        borderColor: '#BBBBBB44',
        borderWidth: 1,
    },
    search: {
        paddingVertical: vh(10),
        paddingHorizontal: vw(12),
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
    },
    searchImg: {
        height: vh(18),
        width: vw(18),
        marginRight: 4,
    },
    searchText: {
        width: vw(300),
    },
    menuItem: {
        paddingHorizontal: vw(12),
        paddingVertical: vh(9),
    },
})