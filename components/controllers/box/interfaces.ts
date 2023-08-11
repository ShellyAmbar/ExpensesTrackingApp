import {
  ScrollViewProps,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import ButtonProps from '../button/interfaces';

export type boxProps = ViewProps &
  TouchableOpacityProps &
  ScrollViewProps &
  ButtonProps & {
    scroll?: boolean;
    horizontal?: boolean;
    ref?: any;
    withoutFeedback?: boolean;
    contentContainerStyle?: ViewStyle;
  };
