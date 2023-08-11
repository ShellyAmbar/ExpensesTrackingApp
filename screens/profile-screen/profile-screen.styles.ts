import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {height, width} from '@ExpensesTracking/constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor: GlobalColors.BgColors.primary,
  },
});
