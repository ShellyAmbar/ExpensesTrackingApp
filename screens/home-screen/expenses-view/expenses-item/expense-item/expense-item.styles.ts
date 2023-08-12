import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles from '@ExpensesTracking/constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  horizontalSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 23,
    paddingStart: 16,
    paddingEnd: 24,
  },

  title: {
    ...Styles.H7,
    color: GlobalColors.TextColors.third,
  },
  amount: {
    ...Styles.H7,
    color: GlobalColors.TextColors.third,
  },
  decimalNumbers: {
    ...Styles.H8,

    color: GlobalColors.TextColors.third,
  },
  number: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
