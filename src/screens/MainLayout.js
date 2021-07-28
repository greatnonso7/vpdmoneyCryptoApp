import React from 'react';
import { Animated, View } from 'react-native';
import { connect } from 'react-redux';

import { COLORS, SIZES, icons } from '../constants';
import { IconTextButton } from '../shared';
import { hp } from '../shared/responsive-dimension';

const MainLayout = ({ children, isTradeModalVisible }) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - hp(240)],
  });

  return (
    <View style={{ flex: 1 }}>
      {children}
      {isTradeModalVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: COLORS.transparentBlack,
          }}
          opacity={modalAnimatedValue}
        />
      )}
      {/** MODAL */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: modalY,
          width: '100%',
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
        }}
      >
        <IconTextButton
          label="Transfer"
          icon={icons.send}
          containerStyle={{ marginBottom: SIZES.base }}
          onPress={() => console.log('Transfer')}
        />
        <IconTextButton
          label="Withdraw"
          icon={icons.withdraw}
          containerStyle={{ marginBottom: SIZES.base }}
          onPress={() => console.log('Withdraw')}
        />
      </Animated.View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
}

export default connect(mapStateToProps, null)(MainLayout);
