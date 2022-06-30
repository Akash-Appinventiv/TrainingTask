import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { styles } from './style';

export const CustomTab = ({ state, navigation }) => {
    return (
        <View style={styles.barContainer}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.jumpTo('OneWay')}
                style={state.index === 0 ? [styles.tab, {backgroundColor: '#FFFFFF',}] : styles.tab
                }>
                <Text style={state.index === 0 ? [styles.tabText, {color: '#0087F5',}] : styles.tabText
                }> {'One Way'} </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.jumpTo('RoundTrip')}
                style={state.index === 1 ? [styles.tab, {backgroundColor: '#FFFFFF',}] : styles.tab
                }>
                <Text style={state.index === 1 ? [styles.tabText, {color: '#0087F5',}] : styles.tabText
                }> {'Round Trip'} </Text>
            </TouchableOpacity>
        </View>
    )
}
