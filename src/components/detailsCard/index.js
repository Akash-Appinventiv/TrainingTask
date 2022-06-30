import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function DetailsCard({details}) {
  return (
    <View style={styles.details}>
                        <Image style={styles.profilePic} source={details.profilePic} />
                    <View style={styles.profileDetails}>
                        <Text style={styles.personName}>
                            {details.name}
                        </Text>
                        <Text style={styles.personAddress}>
                            {details.address}
                        </Text>
                    </View>
                </View>
  )
}