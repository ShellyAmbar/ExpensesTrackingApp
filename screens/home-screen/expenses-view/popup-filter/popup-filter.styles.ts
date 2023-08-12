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
  content: {
    width: '100%',

    flexDirection: 'column',
    paddingEnd: 24,
  },
  contentContainer: {
    width: '100%',
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
    color: GlobalColors.buttonColors.secondery,
  },
});
