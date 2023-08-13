import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-create-new-expense.styles';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import {Expense} from '@ExpensesTracking/store/data/expanses';
import usePopupCreateExpense from './hooks/usePopupCreateExpense';
import {PopupCreateNewExpenseProps} from './interfaces';
import moment from 'moment';

import FormViewFactory from '@ExpensesTracking/components/factories/form-view-factory/form-view-factory';

const PopupCreateNewExpense = ({
  onClose,
  ...props
}: PopupCreateNewExpenseProps) => {
  const {newExpense, setNewExpense, createExpense} = usePopupCreateExpense();

  return (
    <Box style={styles.container}>
      <FormViewFactory
        type="expense"
        onPickDate={date => {
          (newExpense as Expense).date = date;
          setNewExpense({...(newExpense as Expense)});
        }}
        title="Create Expense"
        onClickConfirm={() => {
          createExpense();
          onClose();
        }}
        properties={[
          {
            onChangeText: text => {
              (newExpense as Expense).name = text;
              setNewExpense({...(newExpense as Expense)});
            },
            value: (newExpense as Expense).name,
            onPressIn: () => {},
          },
          {
            onChangeText: text => {
              (newExpense as Expense).amount = text;
              setNewExpense({...(newExpense as Expense)});
            },
            value: (newExpense as Expense).amount,
            onPressIn: () => {},
          },
          {
            defaultValue: (newExpense as Expense).date
              ? moment(newExpense.date).format('DD/MM/YYYY')
              : '',
            onChangeText: text => {},
            value: (newExpense as Expense).date
              ? moment(newExpense.date).format('DD/MM/YYYY')
              : '',
          },
        ]}
        children={<Spacer size={235} />}
        spacerBetweenProperties={27}
        buttonName="Create"
      />

      <Spacer size={62} />
    </Box>
  );
};

export default PopupCreateNewExpense;
