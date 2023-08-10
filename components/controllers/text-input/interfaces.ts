import {TextProps, ViewProps} from 'react-native';

export default interface TextInputProps extends ViewProps {
  label?: string;
  lableStyle?: TextProps;
  isError?: boolean;
  disabled?: boolean;
  editable?: boolean;

  onChangeText: (text: string) => void;
}
