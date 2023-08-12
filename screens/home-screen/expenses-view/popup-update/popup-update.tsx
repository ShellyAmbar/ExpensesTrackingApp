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
const PopupUpdate = ({item, onSubmit, ...props}: PopupUpdateProps) => {
  const {openDatePicker, setOpenDatePicker} = usePopupUpdate();
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
              item.date = date;
              setOpenDatePicker(false);
            }}
          />
        </Popup>
      )}

      <Spacer size={50} />
      <TextFactory style={styles.titel}>{'Edit Expense'}</TextFactory>

      <TextInput
        label="Title"
        lableStyle={styles.lable}
        inputStyle={styles.textInput}
        defaultValue={item.name ?? ''}
        onChangeText={titel => {
          item.name = titel;
        }}
      />
      <Spacer size={27} />

      <TextInput
        label="Amount"
        lableStyle={styles.lable}
        inputStyle={styles.textInput}
        defaultValue={item.amount ?? ''}
        onChangeText={amount => {
          if (amount?.length > 0) {
            item.amount = amount;
          }
        }}
      />
      <Spacer size={27} />

      <TextInput
        label="Date"
        lableStyle={styles.lable}
        inputStyle={styles.textInput}
        defaultValue={item.date ? moment(item.date).format('DD/MM/YYYY') : ''}
        onChangeText={() => {}}
        onPressIn={() => {
          setOpenDatePicker(true);
        }}
      />
      <Spacer size={235} />
      <ButtonFactory
        type="primary"
        label="Save"
        onPress={() => onSubmit(item)}
      />
      <Spacer size={62} />
    </Box>
  );
};

export default PopupUpdate;
