import {GlobalColors} from '@ExpensesTracking/constants/colors';
import Styles, {width} from '@ExpensesTracking/constants/styles';
import {Dimensions, I18nManager, StyleSheet} from 'react-native';

export default StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    width: '100%',
  },
  halfCircularRectView: {
    zIndex: 2,
    position: 'absolute',
    width: width,
    top: Dimensions.get('screen').height,
    paddingHorizontal: 32,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: GlobalColors.BgColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  end: {
    alignSelf: 'flex-start',
    width: 32,
    height: 32,
  },
  title: {
    // ...Styles.H5,
    width: '100%',
    flex: 1,
    textAlign: 'center',
    paddingTop: 5,
  },
  top: {
    width: width,
    paddingBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
  },
  content: {
    marginTop: 60,
    zIndex: 3,
    width: '100%',
    paddingTop: 8,
  },
});
