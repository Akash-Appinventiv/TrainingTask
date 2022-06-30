import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Svg, Path } from 'react-native-svg'
import { Images, vw } from '../../utils'


export function CustomBottomTab({ navigation, state }) {
  return (

    <View style={styles.barContainer}>
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Image style={styles.icon} source={state.index === 0 ? Images.activehome : Images.home} />
      </TouchableOpacity>
        
      <Svg height={vw(70)} width={vw(84)}  style={{ backgroundColor: 'transparent', }}>

        <Path
        d="M 84.2 0 V 70 H 0 V 0 c 0,0 1,0.3 2,3 c 0,0 2,35 39,36.5 c 0,0 34,2 38,-36.5 c 0,0 1,-2.2 2.6,-3 h 0.4 "
        fill="white"
        />

      </Svg>

      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Bookmark')} style={styles.button}>
        <Image style={styles.icon} source={state.index === 1 ? Images.activebookmark : Images.bookmark} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0} onPress={() => navigation.navigate('Animation')} style={styles.floatButton}>
        <Image style={styles.floatIcon} source={Images.plane} />
      </TouchableOpacity>
    </View>

  )
}
