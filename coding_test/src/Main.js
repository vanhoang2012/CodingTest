import React from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppContextProvider from './contexts/AppContext';
import AppNavigation from './navigation/AppNavigator';
import {getStatusBarHeight, isIOS} from './themes/Layouts';

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContextProvider>
        <AppNavigation />
      </AppContextProvider>
    </View>
  );
};

export default Main;
