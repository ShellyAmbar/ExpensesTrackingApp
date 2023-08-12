import {useLayoutEffect} from 'react';

const useAuthScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return {};
};

export default useAuthScreen;
