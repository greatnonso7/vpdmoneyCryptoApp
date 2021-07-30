import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deviceWidth, hp } from './responsive-dimension';
import { COLORS, FONTS, SIZES } from '../constants';

const { width } = Dimensions.get('screen');

const InputText = ({ iconName, placeholder, labelValue, ...rest }) => {
  return (
    <View style={styles.formControl}>
      <View style={styles.iconStyle}>
        <Ionicons style={styles.formIcon} name={iconName} size={25} />
      </View>
      <TextInput
        value={labelValue}
        numberOfLines={1}
        style={styles.formText}
        placeholder={placeholder}
        placeholderTextColor="#000"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: deviceWidth * 0.89,
    height: hp(60),
    borderWidth: hp(1),
    borderColor: COLORS.darkBrown,
    borderRadius: hp(10),
    marginBottom: hp(40),
  },
  formIcon: {
    color: COLORS.darkBrown,
    alignSelf: 'center',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  formText: {
    color: COLORS.darkBrown,
    fontSize: 20,
    marginLeft: 15,
  },
});

export default InputText;
