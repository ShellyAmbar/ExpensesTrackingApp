import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles, {height, width} from '@ExpensesTracking/constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  listContainer: {
    width: '100%',
  },

  horizontalStart: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  horizontalSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 23,
    paddingHorizontal: 16,
  },

  dateView: {
    backgroundColor: GlobalColors.BgColors.secion,

    alignItems: 'center',
    paddingVertical: 5.5,
  },
  date: {
    ...Styles.H8,

    color: GlobalColors.TextColors.secondary,
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
  vertical: {
    flexDirection: 'column',
    width: '100%',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: GlobalColors.Border.primary,
  },
});
