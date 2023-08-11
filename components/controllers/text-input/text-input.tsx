import React from 'react';
import TextInputProps from './interfaces';
import Styles from './text-input.styles';
import {TextInput as RNTextInput} from 'react-native';

import {Box} from '../box/box';
import Text from '../text/text';
import Spacer from '../spacer/spacer';

const TextInput = ({
  label,

  onChangeText,
  style,
  ...props
}: TextInputProps) => {
  return (
    <Box>
      {label && <Text style={[Styles.title]}>{label}</Text>}
      <Spacer size={8} />
      <RNTextInput
        {...props}
        style={[{...Styles.textInput}, {...style}]}
        onChangeText={onChangeText}
      />
    </Box>
  );
};

export default TextInput;
