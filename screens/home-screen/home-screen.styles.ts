import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles, {height, width} from '@ExpensesTracking/constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'column',

    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor: GlobalColors.BgColors.primary,
  },
  horizontalStart: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  horizontalEnd: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  filterText: {
    marginStart: 11,
    ...Styles.H10,
  },

  dateView: {
    backgroundColor: GlobalColors.BgColors.secion,
  },
});
