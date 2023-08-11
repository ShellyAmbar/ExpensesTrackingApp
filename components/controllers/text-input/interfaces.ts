import {
  TextInputProps as RNTextInputProps,
  TextProps,
  ViewProps,
  ViewStyle,
} from 'react-native';

export default interface TextInputProps1 extends RNTextInputProps {
  label?: string;
  lableStyle?: TextProps;
  isError?: boolean;
  disabled?: boolean;
  editable?: boolean;
  style?: ViewStyle;

  onChangeText: (text: string) => void;
}
