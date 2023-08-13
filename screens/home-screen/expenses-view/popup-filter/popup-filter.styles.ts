import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles, {width} from '@ExpensesTracking/constants/styles';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'column',
    alignItems: 'center',
    paddingStart: 24,
    paddingEnd: 16,
  },

  horizontalSpaces: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 17.5,
    paddingEnd: 0,
  },
  titel: {
    ...Styles.H4,
    textAlign: 'center',
  },

  clean: {
    ...Styles.H7,
    color: GlobalColors.buttonColors.secondery,
  },
});
