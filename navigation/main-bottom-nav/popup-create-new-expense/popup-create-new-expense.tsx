import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-create-new-expense.styles';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import usePopupCreateExpense from './hooks/usePopupCreateExpense';
import {PopupCreateNewExpenseProps} from './interfaces';

import FormViewFactory from '@ExpensesTracking/components/factories/form-view-factory/form-view-factory';

const PopupCreateNewExpense = ({
  onClose,
  ...props
}: PopupCreateNewExpenseProps) => {
  const {createExpense} = usePopupCreateExpense();

  return (
    <Box style={styles.container}>
      <FormViewFactory
        type="expense"
        expense={{
          date: new Date(),
        }}
        title="Create Expense"
        onConfirmFormExpense={expense => {
          createExpense(expense);
          onClose();
        }}
        children={<Spacer size={235} />}
        spacerBetweenProperties={27}
        buttonName="Create"
      />

      <Spacer size={62} />
    </Box>
  );
};

export default PopupCreateNewExpense;
