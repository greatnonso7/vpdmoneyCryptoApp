import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { MainLayout } from './';
import { BalanceInfo, Chart } from '../shared';
import { getHoldings } from '../store/market/marketActions';
import { SIZES, COLORS, FONTS, dummyData, icons } from '../constants';

const Portfolio = ({ getHoldings, myHoldings }) => {
  const [selectedCoin, setSelectedCoin] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      getHoldings((holdings = dummyData.holdings));
    }, [])
  );

  const formatAmount = (value) =>
    Number(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);

  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holding_value_change_7d || 0),
    0
  );

  let percChange = (valueChange / (totalWallet - valueChange)) * 100;

  function renderCurrentBalanceSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}
      >
        <Text
          style={{ marginTop: 50, color: COLORS.white, ...FONTS.largeTitle }}
        >
          Portfolio
        </Text>
        <BalanceInfo
          title="Current Balance"
          displayAmount={formatAmount(totalWallet)}
          changePct={percChange}
          containerStyle={{
            marginTop: SIZES.radius,
            marginBottom: SIZES.padding,
          }}
        />
      </View>
    );
  }

  return (
    <MainLayout>
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        {renderCurrentBalanceSection()}

        <Chart
          containerStyle={{ marginTop: SIZES.radius }}
          chartPrices={
            selectedCoin
              ? selectedCoin?.sparkline_in_7d?.value
              : myHoldings[0]?.sparkline_in_7d?.value
          }
        />

        <FlatList
          data={myHoldings}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
          ListHeaderComponent={
            <View>
              <Text style={{ ...FONTS.h2, color: COLORS.white }}>
                Your Assets
              </Text>
              <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                <Text style={{ flex: 1, color: COLORS.lightGray3 }}>Asset</Text>
                <Text
                  style={{
                    flex: 1,
                    color: COLORS.lightGray3,
                    textAlign: 'center',
                  }}
                >
                  Price
                </Text>
                <Text
                  style={{
                    flex: 1,
                    color: COLORS.lightGray3,
                    textAlign: 'right',
                  }}
                >
                  Holdings
                </Text>
              </View>
            </View>
          }
          renderItem={({ item }) => {
            let priceColor =
              item.price_change_percentage_7d_in_currency == 0
                ? COLORS.lightGray3
                : item.price_change_percentage_7d_in_currency > 0
                ? COLORS.lightGreen
                : COLORS.red;
            return (
              <TouchableOpacity
                onPress={() => setSelectedCoin(item)}
                style={{ flexDirection: 'row', height: 55 }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 20, width: 20 }}
                  />
                  <Text
                    style={{
                      marginLeft: SIZES.radius,
                      color: COLORS.white,
                      ...FONTS.h4,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: COLORS.white,
                      ...FONTS.h6,
                      lineHeight: 15,
                    }}
                  >
                    ₦{formatAmount(item.current_price.toLocaleString())}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.price_change_percentage_7d_in_currency != 0 && (
                      <Image
                        source={icons.upArrow}
                        style={{
                          height: 10,
                          width: 10,
                          tintColor: priceColor,
                          transform:
                            item.price_change_percentage_7d_in_currency > 0
                              ? [{ rotate: '45deg' }]
                              : [{ rotate: '125deg' }],
                        }}
                      />
                    )}
                    <Text
                      style={{
                        marginLeft: 5,
                        color: priceColor,
                        ...FONTS.body5,
                        lineHeight: 15,
                      }}
                    >
                      {item.price_change_percentage_7d_in_currency.toFixed(2)} %
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: COLORS.white,
                      ...FONTS.h6,
                      lineHeight: 15,
                    }}
                  >
                    ₦{formatAmount(item.total.toLocaleString())}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: COLORS.lightGray3,
                      ...FONTS.body5,
                      lineHeight: 15,
                    }}
                  >
                    {item.qty} {item.symbol.toUpperCase()}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
