import React, {useEffect, useRef} from 'react';
import {Box} from '../../components/controllers/box/box';
import LottieView from 'lottie-react-native';
import Styles from './splash-screen.styles';

const SplashScreen = (props: any) => {
  const animation = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      //  props.navigation.navigate('Auth');
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {}, []);

  return (
    <Box style={Styles.container}>
      {/* <LottieView
        autoPlay
        ref={animation}
        style={Styles.lottie}
        source={require('@ExpensesTracking/assets/lotties/chart-lottie.json')}
        loop
      /> */}
    </Box>
  );
};

export default SplashScreen;
