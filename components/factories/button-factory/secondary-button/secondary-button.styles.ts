import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: GlobalColors.buttonColors.primary,
    paddingHorizontal: 52,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    color: GlobalColors.TextColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
