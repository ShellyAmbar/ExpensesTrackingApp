import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-filter.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';

const PopupFilter = () => {
  return (
    <Box style={styles.container}>
      <TextFactory style={styles.titel}>{'Filter Expenses'}</TextFactory>
      <Spacer size={26} />
      <TextInput
        placeholder="Title"
        placeholderTextColor={styles.placeholder.color}
        onChangeText={() => {}}
      />
      <Spacer size={26} />
      <Spacer size={26} />
      <TextInput
        placeholder="Amount"
        placeholderTextColor={styles.placeholder.color}
        onChangeText={() => {}}
      />
      <Spacer size={26} />
      <Spacer size={26} />
      <TextInput
        placeholder="Date"
        placeholderTextColor={styles.placeholder.color}
        onChangeText={() => {}}
      />
      <Spacer size={208 + 19 + 8} />
      <ButtonFactory type="primary" label="Create" />
      <Spacer size={62} />
    </Box>
  );
};

export default PopupFilter;
