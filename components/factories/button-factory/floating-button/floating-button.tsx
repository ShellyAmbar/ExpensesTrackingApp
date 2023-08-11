import React from 'react';
import Button from '@ExpensesTracking/components/controllers/button/button';
import ButtonProps from '@ExpensesTracking/components/controllers/button/interfaces';
import styles from './floating-button.styles';
import Plus from '@ExpensesTracking/assets/images/plus.svg';

const PlusButton = ({children, style, ...props}: ButtonProps) => {
  return (
    <Button {...props} style={{...styles.container, ...style}}>
      {children}
    </Button>
  );
};

export default PlusButton;
