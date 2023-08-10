import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textInput: {
    borde: 1,
    width: '100%',

    backgroundColor: GlobalColors.BgColors.primary,
    borderColor: GlobalColors.Border.light,
  },

  title: {
    textAlign: 'left',
  },
});
