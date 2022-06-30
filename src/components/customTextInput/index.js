import { TouchableOpacity, Animated, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style'

export function CustomTextInput({ style, label, labelStyle,placeholder }) {
    const [isFocoused,setIsFocused] = React.useState(false)
    const size = React.useState(new Animated.Value(14))[0]
    const textCoordinates = React.useState(new Animated.ValueXY({ x: 5, y: 7.6 }))[0]

    
    const animatedLabelFocused = () => {
        Animated.timing(
            size,
            {
                toValue: 8,
                duration: 200,
                useNativeDriver: false
            }
        ).start()
        Animated.timing(
            textCoordinates,
            {
                toValue: { x: 5, y: 28 },
                duration: 200,
                useNativeDriver: false
            }
        ).start()
    }

    const animatedLabelUnfocused = () => {
        Animated.timing(
            size,
            {
                toValue: 14,
                duration: 200,
                useNativeDriver: false
            }
        ).start()
        Animated.timing(
            textCoordinates,
            {
                toValue: { x: 5, y: 7.6 },
                duration: 200,
                useNativeDriver: false
            }
        ).start()
    }

    return (
        <TouchableOpacity activeOpacity={1} style={[styles.container, style,{zIndex:1}]} onPress={animatedLabelFocused} >
            <Animated.Text style={[styles.lableText,labelStyle,{fontSize: size,backgroundColor: style.backgroundColor,position: 'absolute',left: textCoordinates.x, bottom: textCoordinates.y,color:style.borderColor}]}>
                {label}
            </Animated.Text>
            <TextInput  onFocus={animatedLabelFocused} onBlur={animatedLabelUnfocused} />

        </TouchableOpacity>
    )
}