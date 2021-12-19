import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {createContext} from 'react';
import {CALLBACK_TYPE} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';

export const AppContext = createContext(null);

const AppContextProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(async () => {
    try {
      const logState = await AsyncStorage.getItem('logState');
      return logState ? JSON.parse(logState) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const setLoginStateToAsyncStorage = async () => {
      const logState = await AsyncStorage.getItem('logState');
      setIsLogged(logState ? JSON.parse(logState) : false);
    };
    setLoginStateToAsyncStorage();
  }, []);

  const setLogged = callback => {
    setIsLogged(true);
    AsyncStorage.setItem('logState', 'true')
      .then(res => {
        callback();
      })
      .catch(e => {});
  };

  const appContextData = {
    isLogged,
    setLogged,
  };

  return (
    <AppContext.Provider value={appContextData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
