import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles, {height, width} from '@ExpensesTracking/constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor: GlobalColors.BgColors.primary,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  horizontalSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: GlobalColors.Border.secondery,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  horizontalStart: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    borderBottomColor: GlobalColors.Border.secondery,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },

  title: {
    ...Styles.H5,
    color: GlobalColors.TextColors.forth,
  },
  number: {
    ...Styles.H5,
    color: GlobalColors.TextColors.primary,
  },
  line: {
    backgroundColor: GlobalColors.Border.secondery,
    height: 1,
    width: '100%',
  },
});
