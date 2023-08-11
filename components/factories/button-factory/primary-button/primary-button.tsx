import React from 'react';
import Button from '@ExpensesTracking/components/controllers/button/button';
import ButtonProps from '@ExpensesTracking/components/controllers/button/interfaces';
import styles from './primary-button.styles';

const PrimaryButton = (props: ButtonProps) => {
  return <Button {...props} style={styles.button} lableStyle={styles.text} />;
};

export default PrimaryButton;
