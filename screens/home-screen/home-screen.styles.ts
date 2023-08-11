import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {height, width} from '@ExpensesTracking/constants/styles';
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
  horizontal: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
});
