import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Colors from '../themes/Colors';
import {
  responsiveFont,
  responsiveHeight,
  responsiveWidth,
} from '../themes/Layouts';

export default function MyInput({
  value,
  onChangeText,
  placeholder,
  style,
  secureTextEntry = false,
  clearButtonMode = false,
  autoFocus = false,
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
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.container, style]}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      clearButtonMode={clearButtonMode ? 'always' : 'never'}
      autoFocus={autoFocus}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(45),
    borderWidth: 1,
    borderRadius: responsiveHeight(8),
    borderColor: Colors.blackText3,
    padding: 0,
    paddingHorizontal: responsiveWidth(12),
    fontSize: responsiveFont(15),
    color: Colors.blackText,
  },
});
