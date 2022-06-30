import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function RadioButton({data,style,value,onChangeValue}) {
  return (
    <TouchableOpacity style={[styles.radioFeild,style]} onPress={()=>onChangeValue(data.title)}>
      <View style={styles.button} >
          <View style={value == data.title ? styles.buttonOn : styles.buttonOff}></View>
      </View>
      <Text>{data.title}</Text>
    </TouchableOpacity>
  )
}