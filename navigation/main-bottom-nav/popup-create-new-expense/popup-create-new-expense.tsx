import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-create-new-expense.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import {Expense, ExpenseItem} from '@ExpensesTracking/store/data/expanses';
import {useStore} from '@ExpensesTracking/store';
import usePopupCreateExpense from './hooks/usePopupCreateExpense';
import {PopupCreateNewExpenseProps} from './interfaces';

const PopupCreateNewExpense = ({
  onClose,
  ...props
}: PopupCreateNewExpenseProps) => {
  const {newExpense, setNewExpense, createExpense} = usePopupCreateExpense();

  return (
    <Box style={styles.container}>
      <TextFactory style={styles.titel}>{'Create Expense'}</TextFactory>
      <Spacer size={26} />
      <TextInput
        placeholder="Title"
        inputStyle={styles.textInput}
        placeholderTextColor={styles.placeholder.color}
        onChangeText={text => {
          (newExpense as Expense).name = text;
          setNewExpense({...(newExpense as Expense)});
        }}
      />
      <Spacer size={27} />
      <TextInput
        placeholder="Amount"
        inputStyle={styles.textInput}
        placeholderTextColor={styles.placeholder.color}
        onChangeText={text => {
          (newExpense as Expense).amount = text;
          setNewExpense({...(newExpense as Expense)});
        }}
      />
      <Spacer size={27} />
      <TextInput
        placeholder="Date"
        inputStyle={styles.textInput}
        placeholderTextColor={styles.placeholder.color}
        onChangeText={text => {
          (newExpense as Expense).date = text;
          setNewExpense({...(newExpense as Expense)});
        }}
      />
      <Spacer size={235} />
      <ButtonFactory
        type="primary"
        label="Create"
        onPress={() => {
          createExpense();
          onClose();
        }}
      />
      <Spacer size={62} />
    </Box>
  );
};

export default PopupCreateNewExpense;
