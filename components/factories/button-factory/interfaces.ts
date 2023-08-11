import ButtonProps from '@ExpensesTracking/components/controllers/button/interfaces';
import {TextStyle, TouchableOpacityProps, ViewStyle} from 'react-native';
type ButtonFactoryProps =
  | ({
      type?: 'primary' | 'secondary' | 'floating';
      label?: string;
      style?: ViewStyle;
      lableStyle?: TextStyle;
    } & ButtonProps)
  | ({
      type?: 'default';
      label?: string;
      style?: ViewStyle;
      lableStyle?: TextStyle;
    } & ButtonProps);
export default ButtonFactoryProps;
