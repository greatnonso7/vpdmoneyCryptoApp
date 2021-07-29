import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { hp } from '../../shared/responsive-dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: hp(15),
  },
  body: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding * 3,
  },
});
