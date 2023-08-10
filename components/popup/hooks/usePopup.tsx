import {Animated, Dimensions, Platform} from 'react-native';
import {useRef} from 'react';
import usePopupProps from './interfaces';
import Styles from '../popup.styles';

const usePopup = (props: usePopupProps) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  let deviceH = Dimensions.get('screen').height;
  let deviceW = Dimensions.get('window').height;
  let diff = deviceH - deviceW;

  const animatSlideDown = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: props.durationEnter,
      useNativeDriver: true,
    }).start(() => {
      props.onClickClose && props.onClickClose();
    });
  };

  const animatSlideUp = (height: number) => {
    let finalheight =
      Platform.OS === 'ios'
        ? -height - diff - Styles.content.marginTop
        : -height - diff;

    Animated.timing(slideAnim, {
      toValue: finalheight,
      duration: props.durationExit,
      useNativeDriver: true,
    }).start();
  };

  return {
    animatSlideDown,
    animatSlideUp,

    slideAnim,
  };
};

export default usePopup;
