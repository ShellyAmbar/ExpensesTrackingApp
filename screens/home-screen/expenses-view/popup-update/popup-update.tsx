import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-update.styles';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import PopupUpdateProps from './interfaces';

import FormViewFactory from '@ExpensesTracking/components/factories/form-view-factory/form-view-factory';
const PopupUpdate = ({item, onSubmit, ...props}: PopupUpdateProps) => {
  return (
    <Box style={styles.container}>
      <Spacer size={8} />

      <FormViewFactory
        expense={item}
        type="expense"
        title="Edit Expense"
        onConfirmFormExpense={expense => onSubmit(expense)}
        children={<Spacer size={235} />}
        spacerBetweenProperties={27}
        buttonName="Update"
      />

      <Spacer size={62} />
    </Box>
  );
};

export default PopupUpdate;
