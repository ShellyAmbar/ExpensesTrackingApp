import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles from '@ExpensesTracking/constants/styles';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    width: '100%',
  },

  horizontalSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dateView: {
    backgroundColor: GlobalColors.BgColors.secion,
  },
  title: {
    ...Styles.H7Bold,
  },
  numbers: {
    flexDirection: 'row',
    marginTop: 5,
    marginStart: 9,
  },
  amount: {
    ...Styles.H6,
  },
  decimal: {
    ...Styles.H8,
  },
  horizontalStart: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    paddingStart: 14,
    paddingTop: 24,
    paddingBottom: 21,
  },
  horizontalEnd: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    paddingEnd: 11,
  },
  filterText: {
    marginStart: 11,
    ...Styles.H10,
  },
});
