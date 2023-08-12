import React, {useEffect, useRef} from 'react';
import {Box} from '../../components/controllers/box/box';
import LottieView from 'lottie-react-native';
import Styles from './splash-screen.styles';
import {Text, View} from 'react-native';
import {useStore} from '@ExpensesTracking/store';

const SplashScreen = (props?: any) => {
  const animation = useRef(null);
  const rootStore = useStore();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (rootStore.user.isLoggedIn) {
        props?.navigation.navigate('Main');
      } else {
        props?.navigation.navigate('Auth');
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {}, []);

  return (
    <View style={Styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={Styles.lottie}
        source={require('../../assets/lotties/chart-lottie.json')}
        loop
      />
    </View>
  );
};

export default SplashScreen;
