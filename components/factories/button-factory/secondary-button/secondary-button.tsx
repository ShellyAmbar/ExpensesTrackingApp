import React, {Children} from 'react';
import Button from '@ExpensesTracking/components/controllers/button/button';
import ButtonProps from '@ExpensesTracking/components/controllers/button/interfaces';
import styles from './secondary-button.styles';

const SecondaryButton = ({children, ...props}: ButtonProps) => {
  return (
    <Button {...props} style={styles.button} lableStyle={styles.text}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
