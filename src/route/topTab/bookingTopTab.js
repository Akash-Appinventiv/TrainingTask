import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OneWay, RoundTrip } from '../../modules/airplaneBooking';
import { CustomTab } from '../../components';


const TopTab = createMaterialTopTabNavigator();

export  function BookingTopTabNav() {
    return (

        <TopTab.Navigator
            sceneContainerStyle={{ backgroundColor: 'transparent',height: 300,}}
            tabBar={props => <CustomTab {...props} />}
            screenOptions={{
                swipeEnabled: false,
            }}
        >
            <TopTab.Screen name='OneWay' component={OneWay} />
            <TopTab.Screen name='RoundTrip' component={RoundTrip} />
        </TopTab.Navigator>
    )
}

