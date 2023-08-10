import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    borderWidth: 0,
    backgroundColor: GlobalColors.buttonColors.primary,
    borderRadius: 50,
  },
  text: {
    color: GlobalColors.TextColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
