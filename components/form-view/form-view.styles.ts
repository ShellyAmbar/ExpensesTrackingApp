import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles, {width} from '@ExpensesTracking/constants/styles';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  textInput: {
    ...Styles.H7,
    color: GlobalColors.TextColors.primary,
  },
  titel: {
    ...Styles.H4,
    textAlign: 'center',
  },
  placeholder: {
    color: GlobalColors.TextColors.gray2,
  },
});
