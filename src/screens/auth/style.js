import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { hp, wp, deviceWidth } from '../../shared/responsive-dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp(15),
  },
  body: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding * 3,
  },
  contentContainer: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(600),
  },
  buttonContainer: {
    marginHorizontal: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(30),
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: hp(250),
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: COLORS.darkBrown,
    marginLeft: 10,
  },
  textContainer: {
    marginTop: hp(20),
    marginHorizontal: hp(30),
  },
  text: {
    ...FONTS.h2,
    color: COLORS.darkBrown,
    textAlign: 'center',
  },
  imageStyle: {
    height: hp(280),
    width: wp(336),
  },
  loginText: {
    ...FONTS.body2,
    color: COLORS.darkBrown,
  },
  registerText: {
    ...FONTS.body2,
    color: COLORS.white,
  },
  loginButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: COLORS.darkBrown,
    borderWidth: hp(1),
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
    marginTop: hp(20),
  },
  registerButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: COLORS.white,
    borderWidth: hp(1),
    borderColor: COLORS.darkBrown,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
  },
  buttonStyle: {
    marginTop: hp(30),
  },
});
