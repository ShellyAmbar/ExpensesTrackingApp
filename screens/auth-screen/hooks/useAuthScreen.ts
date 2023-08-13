import {useEffect, useLayoutEffect} from 'react';
import {BackHandler} from 'react-native';

const useAuthScreen = ({navigation}) => {
  const backAction = () => {
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return {};
};

export default useAuthScreen;
