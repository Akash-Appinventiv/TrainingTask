import {Text, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import {styles} from './style';

export function AnimationScreen() {
  const listData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
  const colorList = [
    '#666666',
    '#FF0000',
    '#00FFFF',
    '#000FAE',
    '#7890CA',
    '#77C9BC',
    '#CA77BA',
    '#666666',
    '#FF0000',
    '#00FFFF',
    '#000FAE',
    '#7890CA',
    '#77C9BC',
    '#CA77BA',
    '#666666',
    '#FF0000',
    '#00FFFF',
    '#000FAE',
    '#7890CA',
    '#77C9BC',
    '#CA77BA',
  ];
  const scale = React.useState(new Animated.Value(0))[0];

  const scrollEvent = item => {
    Animated.timing(scale, {
      toValue: item % 1,
      duration: 10,
      useNativeDriver: false,
    }).start();
  };

  const renderList = ({item, index}) => {
    return (
      <Animated.View
        style={[
          styles.listItemContainer,
          {
            backgroundColor: scale.interpolate({
              inputRange: [0, 1],
              outputRange: [colorList[(index + 1) % 7], colorList[index % 7]],
            }),
          },
        ]}>
        <Text>{item}</Text>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView>
      <Animated.FlatList
        data={listData}
        renderItem={renderList}
        keyExtractor={(item, index) => item * index}
        key={index => index}
        // bounces={false}
        onScroll={event => scrollEvent(event.nativeEvent.contentOffset.y / 50)}
        scrollEventThrottle={1}
      />
    </SafeAreaView>
  );
}
