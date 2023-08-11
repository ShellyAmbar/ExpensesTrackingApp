import React from 'react';
import TextFactoryProps from './interfaces';
import Text from '@ExpensesTracking/components/controllers/text/text';

const TextFactory = ({type, ...props}: TextFactoryProps) => {
  switch (type) {
    default:
      return <Text {...props} />;
  }
};

export default TextFactory;
