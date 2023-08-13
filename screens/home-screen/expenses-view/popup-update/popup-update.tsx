import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-update.styles';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import PopupUpdateProps from './interfaces';
import moment from 'moment';
import usePopupUpdate from './hooks/usePopupUpdate';

import FormViewFactory from '@ExpensesTracking/components/factories/form-view-factory/form-view-factory';
const PopupUpdate = ({item, onSubmit, ...props}: PopupUpdateProps) => {
  const {currentUpdatedExpense, setcurrentUpdatedExpense} = usePopupUpdate({
    expense: item,
  });
  return (
    <Box style={styles.container}>
      <Spacer size={8} />

      <FormViewFactory
        type="expense"
        onPickDate={date =>
          setcurrentUpdatedExpense({...currentUpdatedExpense, date})
        }
        title="Edit Expense"
        onClickConfirm={() => onSubmit(currentUpdatedExpense)}
        properties={[
          {
            onChangeText: text => {
              setcurrentUpdatedExpense({...currentUpdatedExpense, name: text});
            },
            value: currentUpdatedExpense.name ?? '',
            defaultValue: currentUpdatedExpense.name ?? '',
          },
          {
            onChangeText: text => {
              if (text?.length > 0) {
                setcurrentUpdatedExpense({
                  ...currentUpdatedExpense,
                  amount: text,
                });
              }
            },
            value: currentUpdatedExpense.amount ?? '',
            defaultValue: currentUpdatedExpense.amount ?? '',
          },
          {
            defaultValue: currentUpdatedExpense.date
              ? moment(currentUpdatedExpense.date).format('DD/MM/YYYY')
              : '',
            value: currentUpdatedExpense.date
              ? moment(currentUpdatedExpense.date).format('DD/MM/YYYY')
              : '',

            onChangeText: () => {},
          },
        ]}
        children={<Spacer size={235} />}
        spacerBetweenProperties={27}
        buttonName="Update"
      />

      <Spacer size={62} />
    </Box>
  );
};

export default PopupUpdate;
