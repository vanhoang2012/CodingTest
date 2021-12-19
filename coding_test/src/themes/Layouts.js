import {Dimensions, Platform, StatusBar} from 'react-native';

const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;
const {width, height} = Dimensions.get('window');

export function responsiveWidth(value = 0) {
  return (width * value) / DESIGN_WIDTH;
}

export function responsiveHeight(value = 0) {
  return (height * value) / DESIGN_HEIGHT;
}

export function responsiveFont(value = 0) {
  if (isIOS()) return (width * value) / DESIGN_WIDTH;
  else {
    return (width * value) / DESIGN_WIDTH;
  }
}

export function deviceWidth() {
  return width;
}

export function deviceHeight() {
  return height;
}

export function isIOS() {
  return Platform.OS === 'ios';
}

export function getStatusBarHeight(skipAndroid = false) {
  if (Platform.OS === 'ios') {
    return isIphoneX() ? 40 : 20;
  }
  if (skipAndroid) {
    return 0;
  }

  return StatusBar.currentHeight;
}
export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.height === 844)
  );
}

export const shadow = {
  shadowColor: '#000',
  shadowRadius: 5,
  elevation: 5,
  shadowOpacity: 0.1,
  shadowOffset: {width: 0, height: 3},
};

export const hitSlop = {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10,
};

export const applyOpacity = (hexColor, opacity) => {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};
