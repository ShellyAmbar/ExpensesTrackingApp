import {TextInputProps as RNTextInputProps, TextStyle} from 'react-native';

export default interface TextInputProps extends RNTextInputProps {
  label?: string;
  lableStyle?: TextStyle;
  isError?: boolean;
  disabled?: boolean;
  editable?: boolean;
  inputStyle?: TextStyle;
  ref?: any;
  onChangeText: (text: string) => void;
}
