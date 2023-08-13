import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles from '@ExpensesTracking/constants/styles';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textInput: {
    ...Styles.H7,
    color: GlobalColors.TextColors.primary,
  },

  placeholder: {
    color: GlobalColors.TextColors.gray2,
  },
  lable: {
    ...Styles.H9,
    color: GlobalColors.TextColors.gray,
  },
});
