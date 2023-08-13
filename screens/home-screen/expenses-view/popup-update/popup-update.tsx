import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-update.styles';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import PopupUpdateProps from './interfaces';
import moment from 'moment';
import Popup from '@ExpensesTracking/components/popup/popup';
import usePopupUpdate from './hooks/usePopupUpdate';
import DatePickerView from '@ExpensesTracking/components/date-picker-view/date-picker-view';
import {Keyboard} from 'react-native';

import FormViewFactory from '@ExpensesTracking/components/factories/form-view-factory/form-view-factory';
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

      <FormViewFactory
        type="expense"
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
            onPressIn: () => {
              setOpenDatePicker(true);
            },
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
