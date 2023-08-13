import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-filter.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import {PopupFilterProps} from './interfaces';
import Close from '@ExpensesTracking/assets/images/close.svg';
import {useStore} from '@ExpensesTracking/store';
import {Keyboard} from 'react-native';
import Popup from '@ExpensesTracking/components/popup/popup';
import DatePickerView from '@ExpensesTracking/components/date-picker-view/date-picker-view';
import moment from 'moment';
import usePopupFilter from './hooks/usePopupFilter';
const PopupFilter = ({
  onSubmit,
  onClickClose,
  onClickClean,
  ...props
}: PopupFilterProps) => {
  const store = useStore();
  const {openDatePicker, setOpenDatePicker} = usePopupFilter();
  return (
    <Box
      scroll
      contentContainerStyle={styles.container}
      style={{width: '100%'}}>
      {openDatePicker && (
        <Popup
          onClickClose={() => {
            setOpenDatePicker(false);
          }}
          isVisible={openDatePicker}>
          <DatePickerView
            onConfirm={date => {
              store.user.filters.date = date;
              setOpenDatePicker(false);
              Keyboard.dismiss();
            }}
          />
        </Popup>
      )}

      <Spacer size={16} />
      <Box style={styles.horizontalSpaces}>
        <Box onPress={() => onClickClean()}>
          <TextFactory style={styles.clean}>{'clean'}</TextFactory>
        </Box>
        <TextFactory style={styles.titel}>{'Filter'}</TextFactory>
        <Box
          onPress={() => {
            store.user.filters = {};
            onClickClose();
          }}>
          <Close />
        </Box>
      </Box>

      <Spacer size={9} />

      <Box style={styles.content}>
        <TextInput
          lableStyle={styles.lable}
          inputStyle={styles.textInput}
          label="Title"
          defaultValue={store.user.filters.titel ?? ''}
          onChangeText={text => {
            store.user.filters.titel = text;
          }}
        />
        <Spacer size={41} />

        <TextInput
          lableStyle={styles.lable}
          inputStyle={styles.textInput}
          label="Amount"
          defaultValue={store.user.filters.amount ?? ''}
          onChangeText={text => {
            store.user.filters.amount = text;
          }}
        />
        <Spacer size={41} />

        <TextInput
          lableStyle={styles.lable}
          inputStyle={styles.textInput}
          label="Date"
          defaultValue={
            store.user.filters.date
              ? moment(store.user.filters.date).format('DD/MM/YYYY')
              : ''
          }
          onChangeText={text => {}}
          onPressIn={() => {
            setOpenDatePicker(true);
          }}
        />
        <Spacer size={55} />
      </Box>

      <ButtonFactory type="primary" label="Filter" onPress={() => onSubmit()} />
      <Spacer size={32} />
    </Box>
  );
};

export default PopupFilter;
