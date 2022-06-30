import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground} from 'react-native';
import {Images} from '../../utils';
import {BookingBottomTabNav} from '../bottomTab';
import {styles} from './style';

const Stack = createNativeStackNavigator();

export function AirplaneBookingStack() {
  return (
    <NavigationContainer>
      <ImageBackground
        style={styles.container}
        source={Images.background}
        resizeMode="cover">
        <LinearGradient
          style={styles.container}
          colors={['#00579D', '#0087F544', '#42AAFF']}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: {backgroundColor: 'transparent'},
            }}>
            <Stack.Screen name="bottomTab" component={BookingBottomTabNav} />
          </Stack.Navigator>
        </LinearGradient>
      </ImageBackground>
    </NavigationContainer>
  );
}
