import React, { useEffect } from 'react'
import { styles } from './style'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { check, uncheck } from '../../assets/images'


let arr = []
const checkStatus = (text, isChecked, selected, setSelected) => {
    let index = arr.findIndex((item) => item.id == text.id)
    if (isChecked) {
        arr.push(text)
    }
    else {
        arr.splice(index, 1)
    }
    setSelected([...arr])
}

export default function CustomCheckBox({ text, style, status, id, selected, setSelected }) {
    const [isChecked, setIsChecked] = React.useState(false || status)
    
    useEffect(() => {
        if (isChecked) {
            checkStatus(text, isChecked, selected, setSelected)
        }
    }, [])

    return (

        <TouchableOpacity
            style={{ ...style, ...styles.checkComponent }}
            onPressIn={() => setIsChecked(!isChecked)}
            onPressOut={() => checkStatus(text, isChecked, selected, setSelected)}
        >
            <View style={styles.checkButton} >
                <Image style={styles.checkBox} source={isChecked ? check : uncheck} />
            </View>
            <Text>
                {text.title}
            </Text>
        </TouchableOpacity>
    )
}