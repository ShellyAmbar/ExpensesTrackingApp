import {Text} from 'react-native';
import React from 'react';
import TextFactoryProps from './interfaces';

const TextFactory = ({type, ...props}: TextFactoryProps) => {
  switch (type) {
    default:
      return <Text {...props} />;
  }
};

export default TextFactory;
