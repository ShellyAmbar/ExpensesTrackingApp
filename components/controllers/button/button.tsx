import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import ButtonProps from './interfaces';
import Styles from './button.styles';
import {Box} from '../box/box';

const Button = ({
  label,
  lableStyle,
  style,
  children,
  ...props
}: ButtonProps) => {
  return (
    // <Box style={[{...Styles.button}, {...style}]} {...props}>
    //   <Text style={[{...Styles.text}, {...lableStyle}]}>{label}</Text>
    // </Box>
    <TouchableOpacity {...props} style={style && style} onPress={props.onPress}>
      {label && (
        <Text style={[{...Styles.text}, {...lableStyle}]}>{label}</Text>
      )}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
