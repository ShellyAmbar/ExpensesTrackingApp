import React from 'react';
import styles from './form-view-expense.styles';
import FormView from '@ExpensesTracking/components/form-view/form-view';
import Popup from '@ExpensesTracking/components/popup/popup';
import DatePickerView from '@ExpensesTracking/components/date-picker-view/date-picker-view';
import useFormViewExpense from './hooks/useFormViewExpense';
import {Keyboard} from 'react-native';
import FormViewExpenseProps from './interfaces';

const FormViewExpense = ({
  properties,
  onPickDate,
  ...props
}: FormViewExpenseProps) => {
  const {openDatePicker, setOpenDatePicker} = useFormViewExpense();
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
              onPickDate && onPickDate(date);
              setOpenDatePicker(false);
              Keyboard.dismiss();
            }}
          />
        </Popup>
      )}
      {properties.length === 3 ? (
        <FormView
          {...props}
          properties={[
            {
              labelStyle: styles.lable,
              label: 'Title',
              name: 'Title',
              inputStyle: styles.textInput,
              placeholderTextColor: styles.placeholder.color,
              ...properties[0],
            },
            {
              labelStyle: styles.lable,
              label: 'Amount',
              name: 'Amount',
              inputStyle: styles.textInput,
              placeholderTextColor: styles.placeholder.color,
              ...properties[1],
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
              ...properties[2],
            },
          ]}
        />
      ) : null}
    </>
  );
};

export default FormViewExpense;
