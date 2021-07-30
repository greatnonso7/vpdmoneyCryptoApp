import React from 'react';
import { View, Text } from 'react-native';

import { COLORS, FONTS } from '../../../constants';
import { hp } from '../../../shared/responsive-dimension';
import { HeaderBar, InputText } from '../../../shared';
import { styles } from './style';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <HeaderBar
        title="Login"
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(40),
        }}
        textStyle={{
          color: COLORS.darkBrown,
        }}
      />

      <View style={styles.body}>
        <InputText placeholder="Email" iconName="mail-outline" />
        <InputText placeholder="Password" iconName="lock-closed-outline" />
      </View>
    </View>
  );
};

export default Onboarding;
