import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import {squareImage} from '../../themes/globalStyle';
import {AppContext} from '../../contexts/AppContext';
import {replace} from '../../navigation/NavigationService';
import RouteKey from '../../navigation/RouteKey';

const SplashScreenComponent = ({navigation}) => {
  const appContext = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    if (appContext) {
      setTimeout(async () => {
        const isLogged = await appContext.isLogged;
        if (isLogged) {
          replace(RouteKey.MainStackNavigation, {
            screen: RouteKey.HomeScreen,
          });
          return;
        } else {
          replace(RouteKey.AuthStackNavigation, {
            screen: RouteKey.LoginScreen,
          });
        }
      }, 4000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/images/react-logo.json')}
        autoPlay
        loop
        style={styles.icon}
      />
    </View>
  );
};

export default SplashScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    ...squareImage(100),
  },
});
