import { View, Text, Animated, SafeAreaView, TouchableOpacity, TextInput, InteractionManager } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { CustomTextInput } from '../../../../components'

export function Bookmark() {
  const fade = React.useState(new Animated.Value(1))[0]
  const coordinates = React.useState(new Animated.ValueXY({x:50,y:300}) )[0]
  
  const setvalue = () => {
    Animated.timing(
      fade,
      {
        toValue: 0,
        duration:6000,
        useNativeDriver:true
      },
      ).start()
      Animated.timing(
        coordinates,
        {
          toValue: {x:280,y:500},
          duration:2000,
          useNativeDriver: false
        }
      ).start()

    }


  return (
    <SafeAreaView>
      <Text  style={{ marginTop: 20,}}>
        {'animated view'}
      </Text>
      <Animated.View  style={{opacity:fade,height: 200,backgroundColor: 'red',}} >

      <TouchableOpacity onPress={()=>setvalue()}>
        <Text>
          click here
        </Text>
      </TouchableOpacity>
      </Animated.View>


      <View style={{marginTop: 65,}} >


      {/* <CustomTextInput style={{backgroundColor:'#FFFFFF',}} label={'Name'} placeholder={'Name'} />
      <CustomTextInput style={{backgroundColor:'#FFFFFF',margin: 10,borderColor: '#0000FF',}} label={'Phone no.'} placeholder={'Phone no.'} /> */}

      </View>
    </SafeAreaView>
  )
}