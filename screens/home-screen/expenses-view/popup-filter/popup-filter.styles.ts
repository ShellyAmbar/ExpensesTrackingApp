import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles, {width} from '@ExpensesTracking/constants/styles';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  horizontalSpaces: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    alignItems: 'center',
    paddingVertical: 17.5,
    paddingEnd: 16,
    paddingStart: 24,
  },
  titel: {
    ...Styles.H4,
    textAlign: 'center',
  },
  placeholder: {
    color: GlobalColors.TextColors.gray2,
  },
  lable: {
    ...Styles.H9,
    color: GlobalColors.TextColors.gray,
  },
  textInput: {
    ...Styles.H7,
    color: GlobalColors.TextColors.primary,
  },
  clean: {
    ...Styles.H7,
    color: GlobalColors.TextColors.secondary,
  },
});
