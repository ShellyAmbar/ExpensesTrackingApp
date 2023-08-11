import React, {useEffect, useRef} from 'react';
import {Box} from '../../components/controllers/box/box';
import LottieView from 'lottie-react-native';
import Styles from './splash-screen.styles';
import {Text, View} from 'react-native';

const SplashScreen = (props?: any) => {
  const animation = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      props?.navigation.navigate('Auth');
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
