import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { hp } from './responsive-dimension';

const { width } = Dimensions.get('screen');

const InputText = ({ iconName, placeholder }) => {
  return (
    <View style={styles.formControl}>
      <Ionicons style={styles.formIcon} name={iconName} size={25} />
      <TextInput
        style={styles.formText}
        placeholder={placeholder}
        placeholderTextColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: hp(330),
    height: hp(50),
    borderRadius: hp(10),
    marginBottom: hp(40),
  },
  formIcon: {
    color: '#000',
    alignSelf: 'center',
    marginLeft: hp(16),
  },
  formText: {
    color: '#000',
    fontSize: 20,
    marginLeft: 15,
  },
});

export default InputText;
