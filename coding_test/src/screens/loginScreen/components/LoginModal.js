import React from 'react';
import {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, TextInput} from 'react-native';
import {useKeyboard} from '@react-native-community/hooks';
import MyModal from '../../../customComponents/MyModal';
import MyInput from '../../../customComponents/MyInput';
import Colors from '../../../themes/Colors';
import {
  isIOS,
  isIphoneX,
  responsiveHeight,
  responsiveWidth,
} from '../../../themes/Layouts';
import MyButton from '../../../customComponents/MyButton';

function LoginModal({visible, onClose, onConfirm}) {
  //////////////////////////////////////////////////
  //////////////////// Variable ////////////////////
  //////////////////////////////////////////////////

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const keyboard = useKeyboard();

  ///////////////////////////////////////////////////
  //////////////////// useEffect ////////////////////
  ///////////////////////////////////////////////////

  useEffect(() => {
    setError(false);
  }, [username, password]);

  //////////////////////////////////////////////////
  //////////////////// Function ////////////////////
  //////////////////////////////////////////////////

  const onLoginPress = () => {
    setLoading(true);
    setTimeout(() => {
      if (username === 'VanHoang' && password === '123456') {
        onConfirm();
      } else {
        setLoading(false);
        setError(true);
      }
    }, 500);
  };

  //////////////////////////////////////////////////
  ////////////////////// View //////////////////////
  //////////////////////////////////////////////////
  return (
    <MyModal
      onClose={onClose}
      visible={visible}
      containerStyle={[
        styles.modal,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingBottom:
            (isIOS() && keyboard.keyboardShown ? keyboard.keyboardHeight : 0) +
            responsiveHeight(isIphoneX() ? 20 : 10),
        },
      ]}
      safeAreaWrapper={false}>
      <MyInput
        editable={!loading}
        value={username}
        onChangeText={setUsername}
        placeholder={'Username'}
        clearButtonMode={true}
        autoFocus={true}
      />
      <MyInput
        editable={!loading}
        style={{marginTop: responsiveHeight(12)}}
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
        clearButtonMode={true}
      />
      <Text style={styles.errorText}>
        {error ? 'Incorrect username or password' : ' '}
      </Text>
      <MyButton
        disabled={!username || !password}
        onPress={onLoginPress}
        style={styles.login}
        text={'Login'}>
        {loading ? (
          <ActivityIndicator color={Colors.white} size={'small'} />
        ) : null}
      </MyButton>
    </MyModal>
  );
}

const styles = StyleSheet.create({
  // Modal
  modal: {
    paddingTop: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(16),
    paddingBottom: responsiveHeight(isIphoneX() ? 20 : 10),
  },
  login: {
    marginTop: responsiveHeight(12),
    marginBottom: responsiveHeight(20),
  },
  errorText: {
    color: Colors.red,
    marginVertical: responsiveHeight(12),
  },
});

export default LoginModal;
