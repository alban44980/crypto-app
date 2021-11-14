import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BottomItemProps } from '../../Interfaces';

function DataItem({ name, rate, investment, color }: BottomItemProps) {
  return (
    <View style={styles.dataItem}>
      <View style={styles.crypto}>
        <View style={styles.cryptoBox}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: color,
            }}
          >
            {name}
          </Text>
        </View>
        <View style={styles.cryptoBox}>
          <Text
            style={{
              paddingLeft: 8,
              color: color,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            {rate.toFixed(4)}%
          </Text>
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountNum}>${Math.round(investment)}</Text>
        <Text style={styles.amountText}>invested</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataItem: {
    width: '100%',
    height: '27%',
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  crypto: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cryptoBox: {
    width: '50%',
    alignItems: 'center',
  },
  amount: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  amountNum: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  amountText: { paddingLeft: 8 },
});

export default DataItem;
