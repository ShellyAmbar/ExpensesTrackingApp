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
        value={
          newExpense.date ? moment(newExpense.date).format('DD/MM/YYYY') : ''
        }
        placeholder="Date"
        inputStyle={styles.textInput}
        placeholderTextColor={styles.placeholder.color}
        onChangeText={text => {}}
        onPressIn={() => {
          setOpenDatePicker(true);
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
