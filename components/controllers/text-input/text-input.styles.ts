import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    borderBottomWidth: 1,
    width: '100%',

    backgroundColor: GlobalColors.BgColors.primary,
    borderColor: GlobalColors.Border.light,
  },

  title: {
    textAlign: 'left',
  },
});
