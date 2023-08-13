import {TextStyle} from 'react-native';

export type Propertie = {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChangeText: (text: string) => void;
  onPressIn?: () => void;
  label?: string;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  placeholderTextColor?: string;
};
export type FormViewProps = {
  onClickConfirm: () => void;
  children?: any;
  properties?: Propertie[];
  title?: string;
  spacerBetweenProperties: number;
};
