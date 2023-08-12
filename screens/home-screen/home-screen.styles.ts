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
  headerTitle: {
    ...Styles.H7,
    color: GlobalColors.TextColors.primary,
  },
});
