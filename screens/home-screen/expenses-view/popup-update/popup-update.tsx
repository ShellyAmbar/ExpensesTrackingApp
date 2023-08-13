import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-update.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import PopupUpdateProps from './interfaces';
import moment from 'moment';
import Popup from '@ExpensesTracking/components/popup/popup';
import usePopupUpdate from './hooks/usePopupUpdate';
import DatePickerView from '@ExpensesTracking/components/date-picker-view/date-picker-view';
import {Keyboard} from 'react-native';
import FormView from '@ExpensesTracking/components/form-view/form-view';
const PopupUpdate = ({item, onSubmit, ...props}: PopupUpdateProps) => {
  const {
    openDatePicker,
    setOpenDatePicker,
    currentUpdatedExpense,
    setcurrentUpdatedExpense,
  } = usePopupUpdate({expense: item});
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
              setcurrentUpdatedExpense({...currentUpdatedExpense, date});
              setOpenDatePicker(false);
              Keyboard.dismiss();
            }}
          />
        </Popup>
      )}

      <Spacer size={8} />

      <FormView
        title="Edit Expense"
        onClickConfirm={() => onSubmit(currentUpdatedExpense)}
        properties={[
          {
            name: 'Title',
            label: 'Title',
            labelStyle: styles.lable,
            inputStyle: styles.textInput,
            placeholderTextColor: styles.placeholder.color,
            onChangeText: text => {
              setcurrentUpdatedExpense({...currentUpdatedExpense, name: text});
            },
            value: currentUpdatedExpense.name ?? '',
          },
          {
            label: 'Amount',
            labelStyle: styles.lable,
            name: 'Amount',
            inputStyle: styles.textInput,
            placeholderTextColor: styles.placeholder.color,
            onChangeText: text => {
              if (text?.length > 0) {
                setcurrentUpdatedExpense({
                  ...currentUpdatedExpense,
                  amount: text,
                });
              }
            },
            value: currentUpdatedExpense.amount ?? '',
          },
          {
            name: 'Date',
            label: 'Date',
            labelStyle: styles.lable,
            inputStyle: styles.textInput,
            value: currentUpdatedExpense.date
              ? moment(currentUpdatedExpense.date).format('DD/MM/YYYY')
              : '',

            onChangeText: () => {},
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

export default PopupUpdate;
