import {
  ScrollViewProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import ButtonProps from '../button/interfaces';

export type boxProps = ViewProps &
  TouchableOpacityProps &
  ScrollViewProps & {
    scroll?: boolean;
    horizontal?: boolean;
    ref?: any;
    withoutFeedback?: boolean;
    contentContainerStyle?: ViewStyle;
  };
