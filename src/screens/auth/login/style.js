import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { hp } from '../../../shared/responsive-dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp(15),
  },
  body: {
    marginHorizontal: hp(20),
    marginTop: SIZES.padding * 3,
  },
  appText: {
    ...FONTS.h2,
    textAlign: 'center',
    color: COLORS.darkBrown,
  },
});
