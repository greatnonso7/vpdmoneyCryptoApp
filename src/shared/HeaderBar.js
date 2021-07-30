import React from 'react';
import { View, Text } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

const HeaderBar = ({ title, containerStyle, textStyle }) => {
  return (
    <View
      style={{
        height: 100,
        paddingHorizontal: SIZES.radius,
        justifyContent: 'flex-end',
        ...containerStyle,
      }}
    >
      <Text style={{ color: COLORS.white, ...FONTS.largeTitle, ...textStyle }}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderBar;
