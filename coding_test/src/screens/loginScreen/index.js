import React, {useContext} from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../assets/images/Images';
import {AppContext} from '../../contexts/AppContext';
import MyButton from '../../customComponents/MyButton';
import {replace} from '../../navigation/NavigationService';
import RouteKey from '../../navigation/RouteKey';
import Colors from '../../themes/Colors';
import {squareImage} from '../../themes/globalStyle';
import {
  deviceWidth,
  getStatusBarHeight,
  isIOS,
  responsiveFont,
  responsiveHeight,
  responsiveWidth,
} from '../../themes/Layouts';
import LoginModal from './components/LoginModal';

const LoginScreen = ({navigation}) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const appContext = useContext(AppContext);

  const toggleLoginModal = () => {
    setLoginModalVisible(!loginModalVisible);
  };

  const onLogin = () => {
    appContext.setLogged(() => {
      toggleLoginModal();
      replace(RouteKey.MainStackNavigation, {
        screen: RouteKey.HomeScreen,
      });
    });
  };

  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.hello}>Hello!</Text>
        <Text
          style={
            styles.helloContent
          }>{`Welcome to my application.\nPress login button to continue with us.`}</Text>

        <MyButton
          onPress={toggleLoginModal}
          style={styles.login}
          text={'Login'}
        />
      </View>
      <LoginModal
        visible={loginModalVisible}
        onClose={toggleLoginModal}
        onConfirm={onLogin}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingTop: isIOS() ? getStatusBarHeight() : 0,
  },
  icon: {
    ...squareImage(100),
    marginTop: responsiveHeight(20),
    marginBottom: responsiveHeight(20),
    tintColor: Colors.whiteText,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    width: deviceWidth(),
    borderTopLeftRadius: responsiveWidth(20),
    borderTopRightRadius: responsiveWidth(20),
    paddingHorizontal: responsiveWidth(16),
    paddingTop: responsiveHeight(20),
  },
  hello: {
    fontSize: responsiveFont(20),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.blackText,
  },
  helloContent: {
    fontSize: responsiveFont(14),
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: responsiveHeight(10),
    color: Colors.blackText3,
  },
  login: {
    marginTop: responsiveHeight(100),
    paddingVertical: responsiveHeight(12),
  },
});
