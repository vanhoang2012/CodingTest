import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Colors from '../themes/Colors';
import {
  responsiveFont,
  responsiveHeight,
  responsiveWidth,
} from '../themes/Layouts';

export default function MyButton({
  text,
  onPress,
  disabled,
  style,
  textStyle,
  children,
}) {
  //////////////////////////////////////////////////
  //////////////////// Variable ////////////////////
  //////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  //////////////////// useEffect ////////////////////
  ///////////////////////////////////////////////////

  //////////////////////////////////////////////////
  //////////////////// Function ////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  ////////////////////// View //////////////////////
  //////////////////////////////////////////////////
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}>
      {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(8),
    borderRadius: responsiveHeight(8),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(45),
  },
  disabled: {
    backgroundColor: Colors.backgroundColor,
  },
  text: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
    color: Colors.whiteText,
  },
});
