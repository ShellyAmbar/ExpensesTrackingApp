import {TextStyle, TouchableOpacityProps, ViewStyle} from 'react-native';

export default interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  lableStyle?: TextStyle;
  style?: ViewStyle;
  children?: any;
}
