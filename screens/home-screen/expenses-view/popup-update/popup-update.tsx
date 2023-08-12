import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-update.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import PopupUpdateProps from './interfaces';
const PopupUpdate = ({item, onSubmit, ...props}: PopupUpdateProps) => {
  return (
    <Box style={styles.container}>
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
        defaultValue={item.date ?? ''}
        onChangeText={date => {
          item.date = date;
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
