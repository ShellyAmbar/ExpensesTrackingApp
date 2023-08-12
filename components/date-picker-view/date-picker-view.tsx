import {View, Text} from 'react-native';
import React from 'react';
import {Box} from '../controllers/box/box';
import DatePicker from 'react-native-date-picker';
import {DatePickerViewProps} from './interfaces';
import styles from './date-picker-view.styles';
import useDatePicker from './hooks/useDatePicker';
import TextFactory from '../factories/text-factory/text-factory';
import Spacer from '../controllers/spacer/spacer';
const DatePickerView = (props: DatePickerViewProps) => {
  const {selectedDate, setSelectedDate} = useDatePicker();
  return (
    <Box style={styles.cointainer}>
      <DatePicker
        style={styles.cointainer}
        mode="date"
        date={selectedDate}
        onDateChange={text => {
          setSelectedDate(text);
        }}
      />
      <Box
        style={styles.button}
        onPress={() => {
          props.onConfirm(selectedDate);
        }}>
        <TextFactory style={{fontWeight: 'bold'}}>{'Confirm'}</TextFactory>
      </Box>
      <Spacer size={50} />
    </Box>
  );
};

export default DatePickerView;
