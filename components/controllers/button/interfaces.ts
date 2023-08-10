import {TextProps, TouchableOpacityProps, ViewProps} from 'react-native';

export default interface ButtonProps extends TouchableOpacityProps {
  label: string;
  lableStyle: TextProps;
  style: ViewProps;
}
