import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function Supervisor({name}) {
    return (
        <View style={styles.supervisor}>
            <Text style={styles.superText}>
                {'Under: '}
            </Text>
            <Text style={styles.supervisorName}>
                {name}
            </Text>
        </View>
    )
}