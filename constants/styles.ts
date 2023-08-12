import {Dimensions} from 'react-native';
import {GlobalColors} from './colors';
export const {width, height} = Dimensions.get('screen');
const Styles = {
  H4: {
    fontFamily: 'Helvetica',

    fontSize: 18,
    lineHeight: 24,
    textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
  H5: {
    fontFamily: 'Helvetica',
    //  fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
  H6: {
    fontFamily: 'Helvetica',
    //   fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 18,
    // textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
  H7: {
    fontFamily: 'Helvetica',
    // fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16,
    // textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
  H7Bold: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
  H8: {
    fontFamily: 'Helvetica',
    // fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 14,
    // textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
  H9: {
    fontFamily: 'Helvetica',
    // fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    // textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
  H10: {
    fontFamily: 'Helvetica',
    // fontStyle: 'normal',
    fontSize: 13,
    color: GlobalColors.TextColors.primary,
  },
  H11: {
    fontFamily: 'Helvetica',
    //fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    color: GlobalColors.TextColors.primary,
  },
};

export default Styles;
