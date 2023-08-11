import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {height, width} from '@ExpensesTracking/constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: width,

    height: height,
    backgroundColor: GlobalColors.BgColors.primary,
  },
  contentContainer: {
    justifyContent: 'space-between',

    width: width,
    height: '100%',
    backgroundColor: GlobalColors.BgColors.primary,
  },
  content: {
    width: '100%',

    justifyContent: 'flex-end',

    flex: 1,
    paddingHorizontal: 60,
  },
  bottom: {
    justifyContent: 'flex-end',

    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: GlobalColors.Border.primary,
    shadowColor: GlobalColors.Border.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,

    elevation: 4,
    paddingBottom: 9,
    paddingTop: 28,
    paddingHorizontal: 10,
  },
  textInputPlaceHolder: {
    color: GlobalColors.TextColors.lightGray,
    fontSize: 16,
  },
  rectBorder: {
    borderWidth: 1,
    borderColor: GlobalColors.Border.primary,
  },
  rectBorderStatusBar: {
    borderWidth: 1,
    borderColor: GlobalColors.Border.primary,
    width: '100%',
    height: 44,
  },
});
