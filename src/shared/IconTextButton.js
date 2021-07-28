import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';
import { hp, wp } from '../shared/responsive-dimension';

const IconTextButton = ({ label, icon, containerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(50),
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: wp(20), height: hp(20) }}
      />
      <Text style={{ marginLeft: SIZES.base, ...FONTS.h3 }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
