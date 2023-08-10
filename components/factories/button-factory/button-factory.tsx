import React from 'react';
import ButtonFactoryProps from './interfaces';
import PrimaryButton from './primary-button/primary-button';
import SecondaryButton from './secondary-button/secondary-button';
import Button from '@ExpensesTracking/components/controllers/button/button';
import PlusButton from './plus-button/plus-button';

const ButtonFactory = (props: ButtonFactoryProps) => {
  switch (props.type) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    case 'plus':
      return <PlusButton {...props} />;
    default:
      return <Button {...props} />;
  }
};

export default ButtonFactory;
