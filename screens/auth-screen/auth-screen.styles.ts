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
    shadowColor: GlobalColors.BgColors.black,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    paddingTop: 28,
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal: 10,
    backgroundColor: GlobalColors.BgColors.white,
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
