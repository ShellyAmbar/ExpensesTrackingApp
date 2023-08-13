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
  inputStyle,
  lableStyle,
  value,

  ...props
}: TextInputProps) => {
  return (
    <Box style={Styles.container}>
      {label && value?.length > 0 && (
        <Text style={[Styles.title, {...lableStyle}]}>{label}</Text>
      )}
      <Spacer size={8} />
      <RNTextInput
        {...props}
        style={[{...Styles.textInput}, {...inputStyle}]}
        onChangeText={onChangeText}
      />
    </Box>
  );
};

export default TextInput;
