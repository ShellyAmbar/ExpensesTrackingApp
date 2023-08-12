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
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
const PopupFilter = ({
  onSubmit,
  onClickClose,
  onClickClean,
  ...props
}: PopupFilterProps) => {
  const store = useStore();
  return (
    <Box
      scroll
      contentContainerStyle={styles.container}
      style={{width: '100%'}}>
      <Spacer size={16} />
      <Box style={styles.horizontalSpaces}>
        <Box onPress={() => onClickClean()}>
          <TextFactory style={styles.clean}>{'clean'}</TextFactory>
        </Box>
        <TextFactory style={styles.titel}>{'Filter'}</TextFactory>
        <Box onPress={() => onClickClose()}>
          <Close />
        </Box>
      </Box>

      <Spacer size={9} />
      <KeyboardAvoidingView style={{width: '100%'}}>
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
            defaultValue={store.user.filters.date ?? ''}
            onChangeText={text => {
              store.user.filters.date = text;
            }}
          />
          <Spacer size={55} />
        </Box>
      </KeyboardAvoidingView>

      <ButtonFactory type="primary" label="Filter" onPress={() => onSubmit()} />
      <Spacer size={32} />
    </Box>
  );
};

export default PopupFilter;
