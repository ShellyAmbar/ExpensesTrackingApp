import React from 'react';
import styles from './form-view-expense.styles';
import FormView from '@ExpensesTracking/components/form-view/form-view';
import Popup from '@ExpensesTracking/components/popup/popup';
import DatePickerView from '@ExpensesTracking/components/date-picker-view/date-picker-view';
import useFormViewExpense from './hooks/useFormViewExpense';
import {Keyboard} from 'react-native';
import FormViewExpenseProps from './interfaces';
import moment from 'moment';

const FormViewExpense = ({
  properties,
  onConfirmFormExpense,
  expense,
  ...props
}: FormViewExpenseProps) => {
  const {
    openDatePicker,
    setOpenDatePicker,
    currentUpdatedExpense,
    setcurrentUpdatedExpense,
  } = useFormViewExpense(expense);
  return (
    <>
      {openDatePicker && (
        <Popup
          onClickClose={() => {
            setOpenDatePicker(false);
          }}
          isVisible={openDatePicker}>
          <DatePickerView
            onConfirm={date => {
              setcurrentUpdatedExpense({...currentUpdatedExpense!!, date});

              setOpenDatePicker(false);
              Keyboard.dismiss();
            }}
          />
        </Popup>
      )}

      <FormView
        {...props}
        onClickConfirm={() => {
          onConfirmFormExpense && onConfirmFormExpense(currentUpdatedExpense!!);
        }}
        properties={[
          {
            labelStyle: styles.lable,
            label: 'Title',
            name: 'Title',
            inputStyle: styles.textInput,
            placeholderTextColor: styles.placeholder.color,
            onChangeText: text => {
              setcurrentUpdatedExpense({
                ...currentUpdatedExpense!!,
                name: text,
              });
            },
            value: currentUpdatedExpense?.name ?? '',
            defaultValue: currentUpdatedExpense?.name ?? '',
          },
          {
            labelStyle: styles.lable,
            label: 'Amount',
            name: 'Amount',
            inputStyle: styles.textInput,
            placeholderTextColor: styles.placeholder.color,
            onChangeText: text => {
              setcurrentUpdatedExpense({
                ...currentUpdatedExpense!!,
                amount: text,
              });
            },
            value: currentUpdatedExpense?.amount ?? '',
            defaultValue: currentUpdatedExpense?.amount ?? '',
          },
          {
            labelStyle: styles.lable,
            label: 'Date',
            name: 'Date',
            inputStyle: styles.textInput,
            placeholderTextColor: styles.placeholder.color,
            onPressIn: () => {
              setOpenDatePicker(true);
            },
            defaultValue: currentUpdatedExpense?.date
              ? moment(currentUpdatedExpense?.date).format('DD/MM/YYYY')
              : '',
            value: currentUpdatedExpense?.date
              ? moment(currentUpdatedExpense.date).format('DD/MM/YYYY')
              : '',

            onChangeText: () => {},
          },
        ]}
      />
    </>
  );
};

export default FormViewExpense;
