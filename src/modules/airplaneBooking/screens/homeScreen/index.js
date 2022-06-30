import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {BookingTopTabNav} from '../../../../route';
import {useDispatch} from 'react-redux';
import {homeAction} from '../../reducers/action';
import {MyContext} from '../../../../../App';
import {useNavigation} from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const details = React.useContext(MyContext);

  return (
    <View style={styles.parentContainer}>
      <Text style={styles.heading}>
        {'Hello '}
        {details.name}
        {', Book your flight'}
      </Text>
      <View style={styles.topTabContainer}>
        <BookingTopTabNav />
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(homeAction());
          navigation.navigate('Maps');
        }}>
        <Text>{'click here'}</Text>
      </TouchableOpacity>
    </View>
  );
}
