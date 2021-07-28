import React from 'react';
import { View, Text, Image } from 'react-native';

import { FONTS, COLORS } from '../constants';
import { hp, wp } from '../shared/responsive-dimension';

const TabIcon = ({ focused, icon, iconStyle, label, isTrade }) => {
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: wp(60),
          height: hp(60),
          backgroundColor: COLORS.black,
          borderRadius: hp(30),
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            height: hp(25),
            width: wp(25),
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
        <Text style={{ color: COLORS.white, ...FONTS.h4 }}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? COLORS.white : COLORS.secondary,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h4,
            paddingTop: 5,
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;
