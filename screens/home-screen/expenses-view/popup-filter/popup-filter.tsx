import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './popup-filter.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import {PopupFilterProps} from './interfaces';
import Close from '@ExpensesTracking/assets/images/close.svg';
import {rootStore} from '@ExpensesTracking/store';
import {Keyboard} from 'react-native';
import Popup from '@ExpensesTracking/components/popup/popup';
import DatePickerView from '@ExpensesTracking/components/date-picker-view/date-picker-view';
import moment from 'moment';
import usePopupFilter from './hooks/usePopupFilter';
import {EnumFilters} from './hooks/interfaces';
import FormViewFactory from '@ExpensesTracking/components/factories/form-view-factory/form-view-factory';
const PopupFilter = ({
  onSubmit,
  onClickClose,
  onClickClean,
  ...props
}: PopupFilterProps) => {
  const {selectedFilters, updateFilters, cleanSelectedFilters} =
    usePopupFilter();
  return (
    <Box
      scroll
      contentContainerStyle={styles.container}
      style={{width: '100%'}}>
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

      <FormViewFactory
        type="expense"
        onPickDate={date => updateFilters(EnumFilters.Date, date)}
        onClickConfirm={() => {
          rootStore.user.filters = selectedFilters;
          onSubmit();
        }}
        properties={[
          {
            defaultValue: selectedFilters.title ?? '',
            value: selectedFilters.title ?? '',
            onChangeText: text => {
              updateFilters(EnumFilters.Title, text);
            },
          },
          {
            defaultValue: selectedFilters.amount ?? '',
            value: selectedFilters.amount ?? '',
            onChangeText: text => {
              updateFilters(EnumFilters.Amount, text);
            },
          },
          {
            defaultValue: selectedFilters.date
              ? moment(selectedFilters.date).format('DD/MM/YYYY')
              : '',
            value: selectedFilters.date
              ? moment(selectedFilters.date).format('DD/MM/YYYY')
              : '',

            onChangeText: text => {},
          },
        ]}
        children={<Spacer size={55} />}
        spacerBetweenProperties={41}
        buttonName="Filter"
      />

      <Spacer size={32} />
    </Box>
  );
};

export default PopupFilter;
