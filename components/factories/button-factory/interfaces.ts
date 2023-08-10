import ButtonProps from '@ExpensesTracking/components/controllers/button/interfaces';
import {TextStyle, TouchableOpacityProps, ViewStyle} from 'react-native';
type ButtonFactoryProps =
  | ({
      type: 'primary' | 'secondary' | 'plus';
      label: string;
      style?: ViewStyle;
      lableStyle?: TextStyle;
    } & TouchableOpacityProps)
  | ({
      type?: 'default';
      label: string;
      style?: ViewStyle;
      lableStyle?: TextStyle;
    } & ButtonProps);
export default ButtonFactoryProps;
