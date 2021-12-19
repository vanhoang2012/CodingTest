import {StyleSheet} from 'react-native';
import Colors from './Colors';
import {responsiveHeight, responsiveWidth} from './Layouts';

const globalStyle = StyleSheet.create({
  shadow: {
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {width: responsiveHeight(1), height: responsiveHeight(1)},
    shadowRadius: responsiveWidth(2),
    elevation: 2,
  },
});

export const squareImage = size => {
  return {
    height: responsiveWidth(size),
    width: responsiveWidth(size),
  };
};

export default globalStyle;
