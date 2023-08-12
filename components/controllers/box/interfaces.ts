import {
  FlatListProps,
  ScrollViewProps,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import ButtonProps from '../button/interfaces';

export type boxProps =
  | ViewProps
  | ({
      onPress: () => void;
      ref?: any;
      withoutFeedback?: boolean;
    } & ViewProps &
      TouchableOpacityProps &
      ButtonProps)
  | ({scroll: boolean; ref?: any} & ViewProps & ScrollViewProps)
  | ({flatList: boolean; ref?: any} & ViewProps & FlatListProps<any>);
