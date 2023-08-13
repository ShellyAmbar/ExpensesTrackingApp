import {FormViewProps} from '@ExpensesTracking/components/form-view/interfaces';
import React from 'react';
import styles from './form-view-expense.styles';
import FormView from '@ExpensesTracking/components/form-view/form-view';

const FormViewExpense = ({properties, ...props}: FormViewProps) => {
  return (
    <>
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
              ...properties[2],
            },
          ]}
        />
      ) : null}
    </>
  );
};

export default FormViewExpense;
