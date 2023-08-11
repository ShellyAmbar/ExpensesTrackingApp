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
  titel: {
    ...Styles.H4,
    textAlign: 'center',
  },
  placeholder: {
    color: GlobalColors.TextColors.gray2,
  },
});
