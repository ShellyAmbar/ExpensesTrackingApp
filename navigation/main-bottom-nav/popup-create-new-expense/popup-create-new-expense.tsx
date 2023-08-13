import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-create-new-expense.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import {Expense} from '@ExpensesTracking/store/data/expanses';
import usePopupCreateExpense from './hooks/usePopupCreateExpense';
import {PopupCreateNewExpenseProps} from './interfaces';
import Popup from '@ExpensesTracking/components/popup/popup';
import moment from 'moment';
import DatePickerView from '@ExpensesTracking/components/date-picker-view/date-picker-view';
import {Keyboard} from 'react-native';
import FormView from '@ExpensesTracking/components/form-view/form-view';

const PopupCreateNewExpense = ({
  onClose,
  ...props
}: PopupCreateNewExpenseProps) => {
  const {
    newExpense,
    setNewExpense,
    createExpense,
    openDatePicker,
    setOpenDatePicker,
  } = usePopupCreateExpense();

  return (
    <Box style={styles.container}>
      {openDatePicker && (
        <Popup
          onClickClose={() => {
            setOpenDatePicker(false);
          }}
          isVisible={openDatePicker}>
          <DatePickerView
            onConfirm={date => {
              (newExpense as Expense).date = date;
              setNewExpense({...(newExpense as Expense)});
              setOpenDatePicker(false);
              Keyboard.dismiss();
            }}
          />
        </Popup>
      )}

      <FormView
        title="Create Expense"
        onClickConfirm={() => {
          createExpense();
          onClose();
        }}
        properties={[
          {
            name: 'Title',
            inputStyle: styles.textInput,
            placeholderTextColor: styles.placeholder.color,
            onChangeText: text => {
              (newExpense as Expense).name = text;
              setNewExpense({...(newExpense as Expense)});
            },
            value: (newExpense as Expense).name,
            onPressIn: () => {},
          },
          {
            name: 'Amount',
            inputStyle: styles.textInput,
            placeholderTextColor: styles.placeholder.color,
            onChangeText: text => {
              (newExpense as Expense).amount = text;
              setNewExpense({...(newExpense as Expense)});
            },
            value: (newExpense as Expense).amount,
            onPressIn: () => {},
          },
          {
            name: 'Date',
            inputStyle: styles.textInput,
            placeholderTextColor: styles.placeholder.color,
            onChangeText: text => {},
            value: (newExpense as Expense).date
              ? moment(newExpense.date).format('DD/MM/YYYY')
              : '',
            onPressIn: () => {
              setOpenDatePicker(true);
            },
          },
        ]}
        children={<Spacer size={235} />}
        spacerBetweenProperties={27}
      />

      <Spacer size={62} />
    </Box>
  );
};

export default PopupCreateNewExpense;
