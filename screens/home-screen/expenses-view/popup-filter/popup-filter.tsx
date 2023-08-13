import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-filter.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import TextInput from '@ExpensesTracking/components/controllers/text-input/text-input';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import {PopupFilterProps} from './interfaces';
import Close from '@ExpensesTracking/assets/images/close.svg';
import {rootStore, useStore} from '@ExpensesTracking/store';
import {Keyboard} from 'react-native';
import Popup from '@ExpensesTracking/components/popup/popup';
import DatePickerView from '@ExpensesTracking/components/date-picker-view/date-picker-view';
import moment from 'moment';
import usePopupFilter from './hooks/usePopupFilter';
import {EnumFilters} from './hooks/interfaces';
const PopupFilter = ({
  onSubmit,
  onClickClose,
  onClickClean,
  ...props
}: PopupFilterProps) => {
  const {
    openDatePicker,
    setOpenDatePicker,
    selectedFilters,
    updateFilters,
    cleanSelectedFilters,
  } = usePopupFilter();
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
              updateFilters(EnumFilters.Date, date);
              setOpenDatePicker(false);
              Keyboard.dismiss();
            }}
          />
        </Popup>
      )}

      <Spacer size={16} />
      <Box style={styles.horizontalSpaces}>
        <Box
          onPress={() => {
            cleanSelectedFilters();
            onClickClean();
          }}>
          <TextFactory style={styles.clean}>{'clean'}</TextFactory>
        </Box>
        <TextFactory style={styles.titel}>{'Filter'}</TextFactory>
        <Box
          onPress={() => {
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
          defaultValue={selectedFilters.title ?? ''}
          onChangeText={text => {
            updateFilters(EnumFilters.Title, text);
          }}
        />
        <Spacer size={41} />

        <TextInput
          lableStyle={styles.lable}
          inputStyle={styles.textInput}
          label="Amount"
          defaultValue={selectedFilters.amount ?? ''}
          onChangeText={text => {
            updateFilters(EnumFilters.Amount, text);
          }}
        />
        <Spacer size={41} />

        <TextInput
          lableStyle={styles.lable}
          inputStyle={styles.textInput}
          label="Date"
          defaultValue={
            selectedFilters.date
              ? moment(selectedFilters.date).format('DD/MM/YYYY')
              : ''
          }
          onChangeText={text => {}}
          onPressIn={() => {
            setOpenDatePicker(true);
          }}
        />
        <Spacer size={55} />
      </Box>

      <ButtonFactory
        type="primary"
        label="Filter"
        onPress={() => {
          rootStore.user.filters = selectedFilters;
          onSubmit();
        }}
      />
      <Spacer size={32} />
    </Box>
  );
};

export default PopupFilter;
