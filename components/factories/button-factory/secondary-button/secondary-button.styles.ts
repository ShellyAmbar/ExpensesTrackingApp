import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: GlobalColors.buttonColors.gray,
    paddingHorizontal: 7,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    flexDirection: 'row',
  },
  text: {
    color: GlobalColors.TextColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
