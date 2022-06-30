import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomBottomTab} from '../../components';
import {
  HomeScreen,
  Bookmark,
  AnimationScreen,
} from '../../modules/airplaneBooking';

const BottomTab = createBottomTabNavigator();

export function BookingBottomTabNav() {
  return (
    <BottomTab.Navigator
      tabBar={props => <CustomBottomTab {...props} />}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      initialRouteName={'Animation'}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Bookmark" component={Bookmark} />
      <BottomTab.Screen name="Animation" component={AnimationScreen} />
    </BottomTab.Navigator>
  );
}
