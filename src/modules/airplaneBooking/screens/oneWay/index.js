import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

export function OneWay({navigation}) {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.font}>One Way</Text>
    </View>
  )
}