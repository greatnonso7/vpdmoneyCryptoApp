import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';

import { COLORS, FONTS } from '../../../constants';
import { hp } from '../../../shared/responsive-dimension';
import { HeaderBar, InputText, FormButton } from '../../../shared';
import { styles } from './style';
import { AuthContext } from '../../../navigation/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

  const { login } = useContext(AuthContext);

  const submitForm = () => {
    if (!password) {
      setpasswordError(true);
    }

    if (!email) {
      setEmailError(true);
    }

    if (email != '' && password != '') {
      setpasswordError(false);
      setEmailError(false);
      login(email, password);
    }
  };

  console.log(emailError, passwordError);

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

      <Text style={styles.appText}>Crypto Wallet App</Text>

      <View style={styles.body}>
        <InputText
          placeholder="Email"
          labelValue={email}
          onChangeText={(userEmail) => {
            setEmail(userEmail);
            email.length > 0 && emailError ? setEmailError(false) : null;
          }}
          iconName="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={{
            borderColor: emailError ? COLORS.red : COLORS.darkBrown,
          }}
        />
        {emailError && (
          <Text
            style={{
              position: 'absolute',
              top: hp(65),
              color: COLORS.red,
              paddingLeft: hp(10),
            }}
          >
            {'Email is required'}
          </Text>
        )}
        <InputText
          placeholder="Password"
          labelValue={password}
          onChangeText={(userPassword) => {
            setPassword(userPassword);
            password.length > 0 && emailError ? setPassword(false) : null;
          }}
          iconName="lock-closed-outline"
          secureTextEntry={true}
          containerStyle={{
            borderColor: passwordError ? COLORS.red : COLORS.darkBrown,
          }}
        />
        {passwordError && (
          <Text
            style={{
              position: 'absolute',
              top: hp(165),
              color: COLORS.red,
              paddingLeft: hp(10),
            }}
          >
            {'Password is required'}
          </Text>
        )}

        <FormButton
          buttonTitle="Sign In"
          onPress={() => submitForm()}
          activeOpacity={0.8}
        />
      </View>
    </View>
  );
};

export default Login;
