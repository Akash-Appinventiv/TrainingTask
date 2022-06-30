import {StyleSheet} from 'react-native';
import {vw} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1.3,
    borderRadius: vw(5),
    height: vw(35),
    width: vw(300),
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  lableText: {
    backgroundColor: 'white',
    paddingHorizontal: 2,
    zIndex: 1,
  },
});
