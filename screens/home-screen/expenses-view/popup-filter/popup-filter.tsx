import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-filter.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import {PopupFilterProps} from './interfaces';
import Close from '@ExpensesTracking/assets/images/close.svg';
const PopupFilter = ({
  onSubmit,
  onClickClose,
  onClickClean,
  ...props
}: PopupFilterProps) => {
  return (
    <Box style={styles.container}>
      <Spacer size={16} />
      <Box style={styles.horizontalSpaces}>
        <Box onPress={() => onClickClean()}>
          <TextFactory style={styles.clean}>{'clean'}</TextFactory>
        </Box>
        <TextFactory style={styles.titel}>{'Filter Expenses'}</TextFactory>
        <Box onPress={() => onClickClose()}>
          <Close />
        </Box>
      </Box>

      <Spacer size={26} />
      <TextInput
        lableStyle={styles.lable}
        inputStyle={styles.textInput}
        label="Title"
        onChangeText={() => {}}
      />
      <Spacer size={41} />

      <TextInput
        lableStyle={styles.lable}
        inputStyle={styles.textInput}
        label="Amount"
        onChangeText={() => {}}
      />
      <Spacer size={41} />

      <TextInput
        lableStyle={styles.lable}
        inputStyle={styles.textInput}
        label="Date"
        onChangeText={() => {}}
      />
      <Spacer size={55} />
      <ButtonFactory type="primary" label="Filter" onPress={() => onSubmit()} />
      <Spacer size={32} />
    </Box>
  );
};

export default PopupFilter;
