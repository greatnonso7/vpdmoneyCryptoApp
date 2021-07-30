import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { hp, wp } from './responsive-dimension';
import { COLORS, FONTS } from '../constants';

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: hp(30),
    height: hp(60),
    width: wp(330),
    backgroundColor: COLORS.darkBrown,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
  },
  buttonText: {
    ...FONTS.body2,
    color: COLORS.white,
  },
});

export default FormButton;
