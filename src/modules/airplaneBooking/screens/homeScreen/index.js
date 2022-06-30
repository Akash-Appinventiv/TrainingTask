import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { styles } from './style'
import { BookingTopTabNav } from '../../../../route'
import { useDispatch } from 'react-redux'
import { homeAction } from '../../reducers/action'
import { MyContext } from '../../../../../App'


export function HomeScreen() {
  const dispatch = useDispatch()
  const details = React.useContext(MyContext)

  return (
        <View style={styles.parentContainer}>
          <Text style={styles.heading}>{'Hello '}{details.name}{', Book your flight'}</Text>
          <View style={styles.topTabContainer}>
 <BookingTopTabNav  />
            
          </View>
          <TouchableOpacity onPress={()=>dispatch(homeAction())}>
            <Text style={{textAlign: 'center',}}>
              {'click here'}
            </Text>
          </TouchableOpacity>


        </View>

  )
}